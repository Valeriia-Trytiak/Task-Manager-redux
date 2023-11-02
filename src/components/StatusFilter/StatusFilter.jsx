import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { Button } from 'components/Button/Button';
import { Wrapper } from './StatusFilter.styled';

export const StatusFilter = () => {
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(getStatusFilter);
  return (
    <Wrapper>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </Wrapper>
  );
};
