import { AccordionListAction } from './accordion-list-action';
import { AccordionListGroup } from './accordion-list-group';
import { AccordionListContent } from './accordion-list-content';
import { AccordionListContentItem } from './accordion-list-content-item';
import { AccordionListHeader } from './accordion-list-header';
import { AccordionListItem } from './accordion-list-item';
import { AccordionListRoot } from './accordion-list-root';
import { AccordionListTrigger } from './accordion-list-trigger';

export const AccordionList = {
  Root: AccordionListRoot,
  Item: AccordionListItem,
  Header: AccordionListHeader,
  Trigger: AccordionListTrigger,
  Group: AccordionListGroup,
  Action: AccordionListAction,
  Content: {
    Root: AccordionListContent,
    Item: AccordionListContentItem,
  },
};
