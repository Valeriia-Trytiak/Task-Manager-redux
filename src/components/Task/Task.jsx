import { MdClose } from 'react-icons/md';
import { ButtonSubmit, Checkbox, Text, Wrapper } from './Task.styled';

export const Task = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox type="checkbox" checked={task.completed} />
      <Text>{task.text}</Text>
      <ButtonSubmit>
        <MdClose size={24} />
      </ButtonSubmit>
    </Wrapper>
  );
};
