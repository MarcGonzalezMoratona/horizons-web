import { CheckIcon, ClipboardIcon, Cross1Icon } from '@radix-ui/react-icons';
import React, { useState } from 'react';
import { language } from './FullPost';

type CopyToClipboardProps = {
  content: string;
  language?: language;
};

const CopyToClipboardButton = ({ content, language }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })
      .catch((error) => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
        console.error('Error al copiar al portapapeles:', error);
      });
  };

  return (
    <div className="flex items-center justify-between rounded-t-xl bg-neutral-800 text-neutral-100">
      <p className="my-2 ml-4 text-sm">{language}</p>
      <button className={'my-2 mr-4'} onClick={handleCopy}>
        <span className=" flex items-center gap-2 text-sm">
          {copied ? <CheckIcon /> : error ? <Cross1Icon /> : <ClipboardIcon />}
          {copied ? '¡Copiado!' : error ? 'Error al copiar' : 'Copiar código'}
        </span>
      </button>
    </div>
  );
};

export default CopyToClipboardButton;