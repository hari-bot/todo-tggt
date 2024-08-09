import React from 'react';

interface ProfilePictureProps {
  name: string;
}

function ProfilePicture({ name }: ProfilePictureProps) {
  return (
    <img
      className="rounded-full"
      src={`https://placehold.co/100x/a18aff/ffffff.svg?text=${name[0]}&font=Lato`}
      alt={name}
    />
  );
}

export default ProfilePicture;
