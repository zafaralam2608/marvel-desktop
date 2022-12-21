import React from 'react';
import {
  Event, LibraryBooks, Man, MenuBook, People,
} from '@mui/icons-material';

const albumList = [
  {
    link: 'comics',
    label: 'Comics',
    icon: (<MenuBook />),
    titleParam: 'title',
    searchParam: 'titleStartsWith',
    orderParam: [
      { label: 'Title', value: 'title' },
      { label: 'Sale date', value: 'onsaleDate' },
      { label: 'Modified', value: 'modified' },
    ],
  },
  {
    link: 'characters',
    label: 'Characters',
    icon: (<People />),
    titleParam: 'name',
    searchParam: 'nameStartsWith',
    orderParam: [
      { label: 'Name', value: 'name' },
      { label: 'Modified', value: 'modified' },
    ],
  },
  {
    link: 'creators',
    label: 'Creators',
    icon: (<Man />),
    titleParam: 'fullName',
    searchParam: 'nameStartsWith',
    orderParam: [
      { label: 'Last name', value: 'lastName' },
      { label: 'First name', value: 'firstName' },
      { label: 'Middle name', value: 'middleName' },
      { label: 'Modified', value: 'modified' },
    ],
  },
  {
    link: 'events',
    label: 'Events',
    icon: (<Event />),
    titleParam: 'title',
    searchParam: 'nameStartsWith',
    orderParam: [
      { label: 'Name', value: 'name' },
      { label: 'Start date', value: 'startDate' },
      { label: 'Modified', value: 'modified' },
    ],
  },
  {
    link: 'series',
    label: 'Series',
    icon: (<LibraryBooks />),
    titleParam: 'title',
    searchParam: 'titleStartsWith',
    orderParam: [
      { label: 'Title', value: 'title' },
      { label: 'Start year', value: 'startYear' },
      { label: 'Modified', value: 'modified' },
    ],
  },
];

export default albumList;
