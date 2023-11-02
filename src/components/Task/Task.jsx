import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
// Импортируем генератор экшена
import { deleteTask, toggleCompleted } from '../../redux/actions';
import { ButtonSubmit, Checkbox, Text, Wrapper } from './Task.styled';

export const Task = ({ task }) => {
  // Получаем ссылку на функцию отправки экшенов
  const dispatch = useDispatch();
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен удаления задачи
  const handleDelete = () => dispatch(deleteTask(task.id));
  // Вызываем генератор экшена и передаём идентификатор задачи
  // Отправляем результат - экшен переключения статуса задачи
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <Text>{task.text}</Text>
      <ButtonSubmit type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </ButtonSubmit>
    </Wrapper>
  );
};
