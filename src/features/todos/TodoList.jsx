import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { StatusFilters, statusFilterChanged  } from '../filters/filtersSlice';
import { useFetchTodosQuery } from '../api/apiSlice';
import Spinner from '../../components/Spinner';
import { useMemo } from 'react';
import { createSelector } from '@reduxjs/toolkit';

const FilterDiv = () => {
  const { status } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const filterButtons = Object.entries(StatusFilters).map(([key, value])=>{
    const isSelectedFilter = status === value;
    const handleChangeStatus = () => dispatch(statusFilterChanged(value));
    
    return ( 
      <button key={key} className={`border-2 border-gray-500 dark:border-gray-300 rounded-md px-3 mx-1 mt-1 text-black dark:text-white bg-cyan-100 dark:bg-slate-500 hover:bg-cyan-300 dark:hover:bg-slate-700 focus-visible:bg-cyan-300 dark:focus-visible:bg-slate-700 ${ isSelectedFilter && 'border-y-4 font-semibold'}`} onClick={handleChangeStatus}>{key}</button>
    );
  });
  return ( 
    <div className='justify-evenly p-2.5 flex flex-row flex-wrap lg:flex-nowrap lg:w-2/3'>
      {filterButtons}
    </div>
  );
};

const TodoList = () => {
  const { status } = useSelector(state => state.filters);
  const filterSelector = useMemo(() => {
    return createSelector(
      res => res.data,
      (_res, status)=> status,
      (data, status) => {
        const showAllTodos = status === StatusFilters.All;
        if(showAllTodos) return data;

        const showAllCompletedTodos = status === StatusFilters.Completed;

        return data.filter(todo => {
          return todo.status === showAllCompletedTodos;
        });
      }
    )
  },[]);

  const { 
    filteredTodos,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useFetchTodosQuery(undefined, {
    selectFromResult:result => ({
      ...result,
      filteredTodos: filterSelector(result, status),
    })
  });

  let content;

  if(isSuccess){
    content = filteredTodos.map((todo)=><TodoItem key={todo.id} todo={todo} />);
  }else if(isError){
    content = <p>{error.toString()}</p>;
  }

  return (
    <section className='mb-2 mx-3 flex flex-col justify-center'>
      <div className='flex flex-row w-full md:w-3/5 lg:w-1/2 xl:w-2/5 md:mx-auto justify-evenly mb-3 bg-cyan-100 dark:bg-slate-700 border-b-2 border-x-2 border-gray-500 rounded-md top-0 sticky'>
        <div className='p-1 border-r-2 border-gray-500 flex flex-row lg:w-1/3'>
          <span className='self-center mx-1 text-center text-lg text-black dark:text-white font-semibold'>Display Mode</span>
        </div>
        <FilterDiv />
      </div>
      <ul className={`mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 ${isFetching?'animate-pulse pointer-events-none':''}`}>
        { isFetching && 
        <div className='-ml-8 lg:ml-40 absolute inset-x-1/2 inset-y-1/2 lg:inset-y-1/3'>
          <Spinner size='l'/>
        </div>
        }
        { content }
      </ul>
    </section>);
};

export default TodoList;
