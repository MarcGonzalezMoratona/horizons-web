const snippet = `   // an instance of a user script
    Script myUserScript;
    // get the "Type" of the instance, which holds reflective information
    Type scriptType = typeof(myUserScript);
    // get all the public members of the script
    PropertyInfo[] scriptMembers = scriptType.GetProperties();
    // iterate through all of the members
    foreach (PropertyInfo member : scriptMembers)
    {
      // get the declared name of the member
      string memberName = member.Name;
      // get the value of the member for the script instance
      // equivalent of doing "myUserScript.{memberName}"
      object? memberValue = member.GetValue(myUserScript);
    
      //Render and process the graphical interface
    
      // set the value of the member for the script instance
      // equivalent of doing "myUserScript.{memberName} = memberValue"
      member.SetValue(myUserScript, memberValue);
    }`;

const templateSnippet = `   template<typename T>
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
    };`;

const snippetDeclaration = `    this->members.push_back(
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
`;

const snippetRegister = `   REGISTER_FIELD(Value, float);`;

export const posts = [
  {
    id: 1,
    title: 'Axolotl project: the development starts',
    subtitle: `Horizons Team begins development of Axolotl Project`,
    profile: 'MarcGonzalez.jpg',
    author: 'Marc González',
    date: '14/03/2023',
    paragraphs: [
      {
        heading: 'The project comes up to life',
        content: `On March 14th, the Horizons team kicked off the development of their first delivery for Axolotl Project, a new video game. 
        The team, comprised of 24 students from the UPC School's first Master's Degree in Advanced Programming for AAA video games class, 
        has been preparing for this moment since they first met in October 2022. In the intervening months, 
        they've learned a great deal about 3D modelling, C++ programming, texturing, and game design.
        A lot of things have been going on and now it's time to start applying knowledge to the real project.`,
      },
      {
        heading: 'The first vertical slice',
        content: `The first major milestone in the project is the creation of a "vertical slice" 
        - a playable prototype that lays the foundation for the game's structure. 
        Over the past few weeks, the team has been hard at work on concept discovery, defining the game's art style, lore, and core functionality.
        The goal of this delivery is to present a playable prototype that showcases the game's core gameplay and application structure.`,
        image: '../horizons.svg',
      },
      {
        heading: 'Team methodology',
        content: `To achieve this and subsequent milestones, the team has divided into several smaller teams, 
        each with its own area of focus: Art, Engine, Game Design, Level Design, User Interface, Public Relations, Graphics, and Physics.
        Each team is led by a designated coordinator who manages tasks and ensures everyone is working together towards the same goals.
        Team members are encouraged to change roles between milestones to gain experience in different areas of the game development process.
        If you're interested in following along with the team's progress, you can check out our social media channels.
        Stay tuned for more exciting news!`,
      },
    ],
  },
  {
    id: 2,
    title: 'The GVD is ready!',
    subtitle: 'Horizons team publishes the game vision document of their game',
    profile: 'MarcGonzalez.jpg',
    caption: 'bix.png',
    author: 'Marc González',
    date: '25/03/2023',
    paragraphs: [
      {
        heading:
          'A detailed overview of features, mechanics, and intended audience for upcoming game',
        content: `The Horizons team is excited to announce that they have published the GVD (Game Vision Document) for their upcoming game. 
        The GVD is an essential document that outlines the game's concept, target audience, features, and gameplay mechanics.
        The team has been working hard over the past few months to define the vision for Axolotl project and bring it to life.
        Axolotl Project is a code name or alias for an upcoming video game that is currently in development. 
        It is not the official name of the game and is only being used by the development team as a temporary placeholder 
        until the actual name is revealed.
        `,
      },
      {
        heading: '',
        content: `
        In the coming weeks, the team plans to share more updates on the development of Axolotl, including progress on the game's 
        vertical slices. We invite everyone to follow our social media channels to stay up-to-date on the latest news and announcements. 
        The Horizons team is thrilled to share their journey with the community and can't wait to bring Axolotl project to life!`,
        image: 'bix.png',
      },
      {
        heading: '',
        content: ` With the GVD now published, the team is one step closer to making their vision a reality. The document provides a detailed overview 
        of the game's core features and mechanics, as well as its intended audience and overall theme.
        The Horizons team is excited to share their progress with the community and hopes that the GVD will provide insight into the upcoming game.
        The team also acknowledges that the GVD is not set in stone and is subject to change as development progresses. 
        However, we hope that it provides a solid foundation for the game's development and gives players an idea of what to expect.`,
        document: 'GVD.pdf',
        documentCTA: 'Download GVD',
      },
    ],
  },
  {
    id: 3,
    title: 'The engineering process: adding reflection to our scripts',
    subtitle: `How we assessed our problem, thought of existing solutions and implemented our own`,
    profile: 'GerardQueralt.jpg',
    author: 'Gerard Queralt',
    date: '22/04/2023',
    caption: 'axolotlReflected.png',
    paragraphs: [
      {
        content: `Hello! I'm Gerard, the Game Engine lead of Horizons Games,
        and in this post, I wanted to discuss the process we followed to implement reflection for the scripts written in our engine:
        what was the problem, what were the possible solutions, how we decided on this one and how we implement it.
        It was a ton of fun, and I hope I manage to convey it!`,
      },
      {
        heading: 'What was the problem?',
        content: `OK, I'm getting ahead of myself. First things first: what was the problem we needed to solve?`,
      },
      {
        content: `When writing scripts, gameplay programmers will define values that need to be specific for each instance of the script.
        For example, imagine we have a script that controls how much health a character has.
        It makes sense that the script is the same for all characters, but we don't want Bix or Allura, our main characters,
        to have the same health as the puny drones trying to get in their way, or the unknown threat that awaits them at the end of their adventure.
        That's why, even if the script is the same, the value of health needs to differ between the characters.
        The way this is done in engines like Unity or Unreal is by allowing the user to set those values through the graphical interface of the program,
        and that's what we wanted to do. Here's the problem, though: how can we know the names and values of the variables in the script
        in order to show them in the user interface?`,
        image: 'unity-script.png',
      },
      {
        heading: 'The solution is reflection! Kind of...',
        content: `The answer to that question is really easy: with reflection! Reflection in computer science is defined as
        "is the ability of a process to examine, introspect, and modify its own structure and behavior". In layman's terms,
        it's the ability for a class to know about its contents at runtime, like the name of the class, the methods it contains...
        and its members! That's what we want!`,
        // link: `https://en.wikipedia.org/wiki/Reflective_programming`,
      },
      {
        content: `For instance, this is how we could achieve this in C#:`,
        code: snippet,
        language: 'C#',
      },
      {
        content: `But if you're looking at the scrollbar, you can probably guess that that's not the end of this story.
        Because you see, C++ doesn't have built-in reflection. What would be a simple thing in another programming language
        turned out to be a challenge in this one. Now we advanced onto a different problem:
        how do we implement something that resembles reflection in our engine?`,
      },
      {
        heading: 'Implementing reflection',

        content: `By this point, I hope I've done a good enough job explaining this topic
        that you realize reflection is a huge feature with a lot of possibilities, most of which are thankfully not needed for our project.
        So, the first step of this task was to define our version of reflection with the minimum features required.
        That was easy: we needed to have the name of the member, and a way to read and write it. So, using the "function" class in the standard library
        we wrote a relatively simple template class to fit our needs:`,
        code: templateSnippet,
        language: 'C++',
      },
      {
        content: `And now came the harder part: how can this be used by the rest of the engine? There were two big problems:
        First and foremost, how do we store the different Field instances, given that they will have varying template arguments?
        And after solving that, we needed to figure out how to make it as easy as possible for our gameplay programmers to use this functionality.`,
      },
      {
        content: `The storage was a particularly big concern of mine. Sure, we could create a container for each type of Field that we allowed,
        like "Field<float>", "Field<bool>", and so on. That, as you can imagine, has horrible scaling: for each type,
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
        code: snippetDeclaration,
        language: 'C++',
      },
      {
        content: `And this is how our gameplay programmers can achieve the exact same thing right now:`,
        code: snippetRegister,
        language: 'C++',
      },
      {
        content: `Pretty good, if you ask me!`,
      },
      {
        heading: 'Conclusion',
        content: `To sum up: we assessed our problem, used our knowledge to figure out what we needed to solve it
        and achieved it through research and the help of those more knowledgeable than ourselves.
        We considered a few possibilities for certain things, gauged their impact on the extensibility of the project
        and strived to implement what we considered the best one at the time. And hopefully, we'll be proven right in the months to come!`,
      },
      {
        content: `Thank you for reading this far! I sincerely hope I could provide some insight into the process the Game Engine team goes through
        to implement the best solution for our classmates (and ideally some actual users shortly!) while also being aware of the time constraints of the project.`,
      },
    ],
  },
];
