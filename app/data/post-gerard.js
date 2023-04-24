export const posts = [
  {
    // Unique identifier for the post
    id: 3,
    title: "The engineering process: adding reflection to our scripts",
    subtitle: `How we assessed our problem, thought of existing solutions and implemented our own`,
    profile: "GerardQueralt.jpg",
    author: "Gerard Queralt",
    date: "22/04/2023",
    paragraphs: [
      {
        content: `Hello! I'm Gerard, the Game Engine lead of Horizons Games,
        and in this post I wanted to discuss the process we followed to implement reflection for the scripts written in out engine:
        what was the problem, what were the possible solutions, how we decided on this one and how we implement it.
        It was a ton of fun, and I hope I manage to convey it!`,
      },
      {
        heading: "What was the problem?",

        content: `OK, I'm getting ahead of myself. First things first: what was the problem we needed to solve?`,
      },
      {
        content: `When writing scripts, gameplay programmers will define values that need to be specific for each instance of the script.
        For example, imagine we have a script that controls how much health a character has.
        It makes sense that the script is the same for all characters, but we don't want Bix or Allura, our main characters,
        to have the same health as the puny drones trying to get in their way, or the unknown threat that awaits them at the end of their adventure.
        That's why, even if the script is the same, the value of the health needs to differ between the characters.
        The way this is done in engines like Unity or Unreal is by allowing the user to set those values through the graphical interface of the engine,
        and that's what we wanted to do. Here's the problem, though: how can we know the names and values of the variables in the script
        in order to show them in the user interface?`,
        image: "IMAGE OF UNITY, TBA",
      },
      {
        heading: "The solution is reflection! Kind of...",

        content: `The answer to that question is actually really easy: with reflection! Reflection in computer science is defined as
        "is the ability of a process to examine, introspect, and modify its own structure and behavior". In layman terms,
        it's the ability for a class to know about its contents at runtime, like the name of the class, the methods it contains...
        and its members! That's what we want!`,
        // link: `https://en.wikipedia.org/wiki/Reflective_programming`,
      },
      {
        content: `For instance, this is how we could achieve this in C#:`,
        code: `
    Script myUserScript; // an instance of a user script
    Type scriptType = typeof(myUserScript); // get the "Type" of the instance, which holds reflective information
    PropertyInfo[] scriptMembers = scriptType.GetProperties(); // get all the public members of the script
    foreach (PropertyInfo member : scriptMembers) // iterate through all of the members
    {
      string memberName = member.Name; // get the declared name of the member
      object? memberValue = member.GetValue(myUserScript); // get the value of the member for the script instance; equivalent of doing "myUserScript.{memberName}"
    
      //Draw the value and allow the user to modify it through the graphical interface
    
      member.SetValue(myUserScript, memberValue); // set the value of the member for the script instance; equivalent of doing "myUserScript.{memberName} = memberValue"
    }
      `,
        language: "C#",
      },
      {
        content: `But if you're looking at the scrollbar, you can probably guess that that's not the end of this story.
        Because you see, C++ doesn't have built in reflection. What would be a simple thing in another programming language
        turned out to be a challenge in this one. Now we advanced onto a different problem:
        how do we implement something that resembles reflection in our engine?`,
      },
      {
        heading: "Implementing reflection",

        content: `By this point I hope I've done a good enough job explaining this topic
        that you realize reflection is a huge feature with a lot of possibilities, most of which are thankfully not needed for our project.
        So, the first step of this task was to define our version of reflection with the minimum features required.
        That was easy: we needed to have the name of the member, and a wait to read and write it. So, using the "function" class in the standard library
        we wrote a relatively simple template class to fit our needs`,
        code: `
    template<typename T>
    struct Field
    {
    public:
        std::string name;
        std::function<T(void)> getter;
        std::function<void(T)> setter;
    
        Field(const std::string& name,
            const std::function<T(void)>& getter,
            const std::function<void(T)>& setter) :
            name(name),
            getter(getter),
            setter(setter)
        {
        }
      
      ~Field() = default;
    };
      `,
        language: "C++",
      },
      {
        content: `And now came the harder part: how can this be used by the rest of the engine? There were two big problems:
        First and foremost, how do we store the different Field instances, given that they will have varying template arguments?
        And after solving that, we needed to figure out how to make it as easy as possible for our gameplay programmers to use this feature`,
      },
      {
        content: `The storage was a particularly big concern of mine. Sure, we could create a container for each type of Field that we allowed,
        like "Field<float>", "Field<bool>", and so on. That, as you can imagine, has horrible scailing: for each type,
        we would need to not only create another collection, we would also need to create a getter method for each of them,
        and creating a method to get a Field by name would be an absolute nightmare. So, I didn't consider this an acceptable solution,
        even as a temporary one. Thankfully, a quick search led me to "std::variant", which allowed me to have a single collection for all fields,
        only requiring an enum class to know the type, and an update to the project to the C++20 standard.
        Overall, an easier solution than I thought, and also helped me learn about a C++ feature!`,
      },
      {
        content: `Next was making it as usable as possible. Forcing the gameplay programmer to declare the field instance,
        including the lambda expressions to pass it, was a possibility that I wanted to avoid,
        but ultimately was willing to fall back on if I didn't find a better option. Thankfully for them, one of our wonderful teachers
        recommended me to use preprocessor macros, which meant I got to learn about more features I wasn't too confident in!
        After some iteration, I managed to make it really simple, if I do say so myself.`,
      },
      {
        content: `How simple, you may ask? Well, this is what a manual declaration looks like:`,
        code: `
    this->members.push_back(
      std::make_pair(
        FieldType::FLOAT,
        Field<float>("Value",
               [this] ()
               {
                return this->GetValue();
               },
               [this](float value)
               {
                 return this->SetValue(value);
               })
      )
    );
          `,
        language: "C++",
      },
      {
        content: `And this is how our gameplay programmers can achieve exactly the same thing right now:`,
        code: `
    REGISTER_FIELD(Value, float);
          `,
        language: "C++",
      },
      {
        content: `Pretty good, if you ask me!`,
      },
      {
        heading: "Conclusion",

        content: `To sum up: we assessed our problem, used our knowledge to figure out what we needed to solve it
        and achieved it through research and the help of those more knowledgable than ourselves.
        We considered a few possibilities for certain things, gauged their impact on the extensibility of the project
        and strived to implement what we considered the best one at the time. And hopefully we'll be proven right in the months to come!`,
      },
      {
        content: `Thank you for reading this far! I sincerely hope I could provide some insight on the process the Game Engine team goes through
        to implement the best solution for our classmates (and ideally some actual users in the near future!)
        while also being aware to the time constraints of the project.`,
      },
    ],
  },
];
