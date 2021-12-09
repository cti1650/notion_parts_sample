import { ReactElement } from 'react';
import { AiFillGithub } from 'react-icons/ai';

type Props = {
    user:string | string[],
    icon?:ReactElement
}

export const GitHubButton = ({ user,icon }:Props) => {
    const url = 'https://github.com/';
    const getIcon = () => {
        return icon ? (
            <span className="w-full text-center px-0.5">{icon}</span>
        ):(
          <span className="w-full text-center px-0.5"><AiFillGithub /></span>
      );
    };
    return (
      <>
        <span>
        <a href={url + user}
        rel="nofollow noreferrer noopener"
        target="_blank"
        className="flex flex-row items-center justify-items-center px-8 py-4 bg-gray-300 border border-gray-500 shadow rounded-lg"
        >
          {getIcon()}<span className="w-full text-center">{user}</span>
        </a>
      </span>
      </>
    );
  };