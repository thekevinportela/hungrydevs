import React from "react";
import Image from "next/image";

export type IAuthorProps = {
  author: { photo: { url: string }; name: string; bio: string };
};

const Author: React.FC<IAuthorProps> = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-60">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          className="object-cover rounded-full"
          unoptimized
          height={100}
          width={100}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export { Author };
