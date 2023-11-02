import { Button } from 'components/Button/Button';
import { FormTask, InputForm } from './TaskForm.styled';

export const TaskForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <FormTask onSubmit={handleSubmit}>
      <InputForm type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </FormTask>
  );
};
