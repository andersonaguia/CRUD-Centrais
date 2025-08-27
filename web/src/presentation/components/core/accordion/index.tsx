import { AccordionContent } from './accordion-content';
import { AccordionTriggerFlag } from './accordion-trigger-flag';
import { AccordionTriggerItem } from './accordion-trigger-item';
import { AccordionTrigger } from './accordion-trigger';
import { AccordionRoot } from './accordion-root';
import { AccordionText } from './accordion-text';
import { AccordionItem } from './accordion-item';

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  TriggerItem: AccordionTriggerItem,
  Text: AccordionText,
  TriggerFlag: AccordionTriggerFlag,
  Content: AccordionContent,
};

/**
 * <Accordion.Root>
 *   <Accordion.Item>
 *      <Accordion.Trigger>
 *        <Accordion.TriggerItem>
 *        </Accordion.TriggerItem>
 *
 *        <Accordion.Text>
 *        </Accordion.Text>
 *
 *        <Accordion.TriggerFlag>
 *        </Accordion.TriggerFlag>
 *      </Accordion.Trigger>
 *
 *      <Accordion.Content>
 *      </Accordion.Content>
 *   </Accordion.Item>
 * </Accordion.Root>
 */
