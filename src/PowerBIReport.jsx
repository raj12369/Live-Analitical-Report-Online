import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";

function PowerBIReport() {
  return (
    <PowerBIEmbed
      embedConfig={{
        type: "report",
        id: "YOUR_REPORT_ID",
        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=YOUR_REPORT_ID",
        accessToken: "YOUR_ACCESS_TOKEN",
        tokenType: models.TokenType.Embed,
        settings: {
          panes: {
            filters: { visible: true },
            pageNavigation: { visible: true }
          }
        }
      }}
      cssClassName="powerbi-frame"
    />
  );
}

export default PowerBIReport;
