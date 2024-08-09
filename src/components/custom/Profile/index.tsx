import React from 'react';
import ProfilePicture from '../../base/ProfilePicture';

interface ProfileProps {
  name: string;
}

function Profile({ name }: ProfileProps) {
  return (
    <div className="flex items-center gap-5 border-b-2 border-[#a18aff] pb-10">
      <ProfilePicture name={name} />
      <div>
        <h2 className="text-2xl font-semibold text-black">toDo</h2>
        <p className="text-xl font-semibold text-[#a18aff]">{name}</p>
      </div>
    </div>
  );
}

export default Profile;
