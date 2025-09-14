import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerCardData } from '../../../../shared/components/server-card/server-card.component';
import { ContentBlockComponent } from '../../../../shared/components/content-block/content-block.component';
import { KeyValueListComponent, KeyValueItem } from '../../../../shared/components/key-value-list/key-value-list.component';
import { ServerCardsSectionComponent } from '../../../../shared/components/server-cards-section/server-cards-section.component';

@Component({
  selector: 'app-left-section',
  standalone: true,
  imports: [CommonModule, ContentBlockComponent, KeyValueListComponent, ServerCardsSectionComponent],
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.scss']
})
export class LeftSectionComponent {
  readonly descriptionData = {
    title: 'Description',
    content: 'Lorem ipsum dolor sit amet consectetur. Aenean sodales pellentesque gravida nibh et magna faucibus. Dui commodo ut metus amet egestas habitant viverra. Quisque fusce senectus facilisis non diam leo nulla sem pellentesque. Sit in vel sed cursus metus sit fringilla vestibulum.'
  };

  readonly extraData = {
    title: 'Extra',
    content: 'Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.'
  };

  readonly keyValueItems: KeyValueItem[] = [
    { key: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { key: 'Lorem Ipsum Dolor', value: 'Ut' },
    { key: 'Lorem Ipsum Dolor', value: 'Eros' },
    { key: 'Lorem Ipsum Dolor', value: 'Yes', hasIcon: true, iconClass: 'pi pi-check' },
    { key: 'Lorem Ipsum Dolor', value: 'Sit' },
    { key: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { key: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' }
  ];

  readonly serverCardsData: ServerCardData[] = [
    {
      id: '1',
      title: 'Lorem P',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    },
    {
      id: '2',
      title: 'Lorem S',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    },
    {
      id: '3',
      title: 'Lorem T',
      primaryLabel: 'Server',
      secondaryLabel: 'Server',
      description: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur.']
    }
  ];

  readonly serverCardsSectionTitle = 'Lorem Ipsum Dolor Sit';
}
