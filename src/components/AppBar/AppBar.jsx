import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Header, Section, TitleBar } from './AppBar.slyled';

export const AppBar = () => {
  return (
    <Header>
      <Section>
        <TitleBar>Tasks</TitleBar>
        <TaskCounter />
      </Section>
      <Section>
        <TitleBar>Filter by status</TitleBar>
        <StatusFilter />
      </Section>
    </Header>
  );
};
