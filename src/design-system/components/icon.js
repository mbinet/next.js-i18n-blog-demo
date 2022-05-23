import {
  AcademicCapIcon,
  BookOpenIcon,
  ChevronDownIcon,
  CollectionIcon,
  DocumentSearchIcon,
  EmojiHappyIcon,
  LightningBoltIcon,
  LinkIcon,
  PhotographIcon,
  SearchIcon,
  UserGroupIcon
} from '@heroicons/react/solid'

export default function Icon({
  name, ...otherProps
}) {
  switch (name) {
    case 'academic-cap':
      return <AcademicCapIcon {...otherProps} />
    case 'book-open':
      return <BookOpenIcon { ...otherProps } />
    case 'chevron-down':
      return <ChevronDownIcon { ...otherProps } />
    case 'collection':
      return <CollectionIcon { ...otherProps } />
    case 'document-search':
      return <DocumentSearchIcon { ...otherProps } />
    case 'lightning-bolt':
      return <LightningBoltIcon { ...otherProps } />
    case 'link':
      return <LinkIcon { ...otherProps } />
    case 'photograph':
      return <PhotographIcon { ...otherProps } />
    case 'search':
      return <SearchIcon { ...otherProps } />
    case 'user-group':
      return <UserGroupIcon { ...otherProps } />
    default:
      return <EmojiHappyIcon { ...otherProps } />
  }
}
