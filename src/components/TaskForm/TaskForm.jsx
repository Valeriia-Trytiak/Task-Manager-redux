import { useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { addTask } from 'redux/tasksSlice';
import { FormTask, InputForm } from './TaskForm.styled';

export const TaskForm = () => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <FormTask onSubmit={handleSubmit}>
      <InputForm type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </FormTask>
  );
};
