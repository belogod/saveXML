import {Component} from '@angular/core';
import {FileSaverService} from 'ngx-filesaver';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public text = '';

  constructor(
    private httpClient: HttpClient,
    private fileSaverService: FileSaverService,
  ) {
  }


  onDown(type: string) {
    this.text = '<breakfast_menu>\n' +
      '<food>\n' +
      '<name>Belgian Waffles</name>\n' +
      '<price>$5.95</price>\n' +
      '<description>Two of our famous Belgian Waffles with plenty of real maple syrup</description>\n' +
      '<calories>650</calories>\n' +
      '</food>\n' +
      '<food>\n' +
      '<name>Strawberry Belgian Waffles</name>\n' +
      '<price>$7.95</price>\n' +
      '<description>Light Belgian waffles covered with strawberries and whipped cream</description>\n' +
      '<calories>900</calories>\n' +
      '</food>\n' +
      '<food>\n' +
      '<name>Berry-Berry Belgian Waffles</name>\n' +
      '<price>$8.95</price>\n' +
      '<description>Light Belgian waffles covered with an assortment of fresh berries and whipped cream</description>\n' +
      '<calories>900</calories>\n' +
      '</food>\n' +
      '<food>\n' +
      '<name>French Toast</name>\n' +
      '<price>$4.50</price>\n' +
      '<description>Thick slices made from our homemade sourdough bread</description>\n' +
      '<calories>600</calories>\n' +
      '</food>\n' +
      '<food>\n' +
      '<name>Homestyle Breakfast</name>\n' +
      '<price>$6.95</price>\n' +
      '<description>Two eggs, bacon or sausage, toast, and our ever-popular hash browns</description>\n' +
      '<calories>950</calories>\n' +
      '</food>\n' +
      '</breakfast_menu>';
    const fileName = `save.${type}`;
    const fileType = this.fileSaverService.genType(fileName);
    const txtBlob = new Blob([this.text], {type: fileType});
    this.fileSaverService.save(txtBlob, fileName);
  }


}
