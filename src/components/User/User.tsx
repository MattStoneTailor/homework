import {
  UserDetails, UserElement, UserWrapper, UserDetail
} from "./User.style";
import Image from "../Image/Image";

interface UserInterface {
  data?: any
}
const User = ({ data }: UserInterface) => {
  const {
    picture: {
      large: userPicture,
    },
    name: {
      title: nameTitle,
      first: firstName,
      last: lastName,
    },
    email,
  } = data;
  const userName = `${nameTitle} ${firstName} ${lastName}`;

  return (
    <UserWrapper>
      <UserElement>
        <UserDetails>
          <UserDetail>
            {userName}
          </UserDetail>
          <UserDetail>
            {email}
          </UserDetail>
        </UserDetails>
        <Image src={userPicture} alt={userName} />
      </UserElement>
    </UserWrapper>
  );
};

export default User;
