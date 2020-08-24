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
    this.text =
      '<Chart GridHeightSize="10.952756e-01" UseDefaultLinkSpacingWhenDragging="false" GridVisibleOnAllViews="true" ShowAllFlag="false" ShowPages="true" BackColour="16777215" DefaultLinkSpacing="2.952756e-01" WiringDistanceNear="7.874016e-02" UseWiringHeightForThemeIcon="true" DefaultTickRate="1.000000e+00" WiringHeight="1.968504e-01" GridWidthSize="2.952756e-01" HideMatchingTimeZoneFormat="false" TimeBarVisible="false" WiringSpacing="1.968504e-01" BlankLinkLabels="false" UseLocalTimeZone="true" WiringDistanceFar="3.937008e-01" IdReferenceLinking="false" SnapToGrid="false" LabelSumNumericLinks="false" LabelRule="LabelRuleMerge" Rigorous="true" MsxmlVersion="4.20.9818.0" SchemaVersion="7.0.0.1">\n' +
        '<EntityTypeCollection>\n' +
          '<EntityType Name="Person" Colour="0" IconFile="Person" PreferredRepresentation="RepresentAsIcon"/>\n' +
          '<EntityType Name="Woman" Colour="0" IconFile="Phone" PreferredRepresentation="RepresentAsIcon"/>\n' +
        '</EntityTypeCollection>\n' +
        '<LinkTypeCollection>\n' +
          '<LinkType Colour="0" Name="Link"/>\n' +
        '</LinkTypeCollection>\n' +
        '<ChartItemCollection>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="τττ" XPosition="158">\n' +
            '<End Y="162" X="158" Z="0">\n' +
              '<Entity EntityId="n0" Identity="Tyrion" LabelIsIdentity="false">\n' +
                '<Icon TextX="0" TextY="16">\n' +
                  '<IconStyle Type="Person"/>\n' +
                '</Icon>\n' +
              '</Entity>\n' +
            '</End>\n' +
          '</ChartItem>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="Tywin" XPosition="211">\n' +
            '<End Y="0" X="211" Z="0">\n' +
              '<Entity EntityId="n1" Identity="Tywin" LabelIsIdentity="false">\n' +
                '<Icon TextX="0" TextY="16">\n' +
                  '<IconStyle Type="Person"/>\n' +
                '</Icon>\n' +
              '</Entity>\n' +
            '</End>\n' +
          '</ChartItem>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="Jaime" XPosition="0">\n' +
            '<End Y="216" X="0" Z="0">\n' +
              '<Entity EntityId="n2" Identity="Jaime" LabelIsIdentity="false">\n' +
                '<Icon TextX="0" TextY="16">\n' +
                  '<IconStyle Type="Person"/>\n' +
                '</Icon>\n' +
              '</Entity>\n' +
            '</End>\n' +
          '</ChartItem>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="Cersei" XPosition="0">\n' +
            '<End Y="0" X="0" Z="0">\n' +
              '<Entity EntityId="n3" Identity="Cersei" LabelIsIdentity="false">\n' +
                '<Icon TextX="0" TextY="16">\n' +
                  '<IconStyle Type="Woman"/>\n' +
                '</Icon>\n' +
              '</Entity>\n' +
            '</End>\n' +
          '</ChartItem>\n' +
        '</ChartItemCollection>\n' +
        '<ChartItemCollection>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="Father of" XPosition="0">\n' +
            '<Link End1Id="n1" LabelSegment="0" LabelPos="50" End2Id="n0">\n' +
              '<LinkStyle ArrowStyle="ArrowOnHead" Type="Link"/>\n' +
            '</Link>\n' +
          '</ChartItem>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="Brother of" XPosition="0">\n' +
            '<Link End1Id="n2" LabelSegment="0" LabelPos="50" End2Id="n0">\n' +
              '<LinkStyle ArrowStyle="ArrowOnHead" Type="Link"/>\n' +
            '</Link>\n' +
          '</ChartItem>\n' +
          '<ChartItem DateSet="false" GradeOneIndex="0" GradeTwoIndex="0" Selected="false" GradeThreeIndex="0" TimeSet="false" Ordered="false" Label="25/13" XPosition="0">\n' +
            '<Link End1Id="n3" LabelSegment="0" LabelPos="50" End2Id="n0">\n' +
              '<LinkStyle ArrowStyle="ArrowOnHead" Type="Link"/>\n' +
            '</Link>\n' +
          '</ChartItem>\n' +
        '</ChartItemCollection>\n' +
      '</Chart>';
    const fileName = `save.${type}`;
    const fileType = this.fileSaverService.genType(fileName);
    const txtBlob = new Blob([this.text], {type: fileType});
    this.fileSaverService.save(txtBlob, fileName);
  }


}
