import useTranslation from "next-translate/useTranslation";

const PrintDom = ({
  type = "incoming",
  outgoingData = [],
  incomingData = [],
}) => {
  const { t } = useTranslation("print");
  const { t: tHome } = useTranslation("home");
  return (
    <div id="section-to-print">
      <section className="text-center text-xl font-bold">
        <h1>{t("header1")}</h1>
        <h1>{t("header2")}</h1>
        <h1 style={{ fontFamily: "tacteng" }} className="text-5xl font-light">
          3
        </h1>
      </section>
      <section
        style={{ width: "34%" }}
        className="text-center text-xl font-bold -mt-9"
      >
        <h1>{t("subheader1")}</h1>
        <h1>{t("subheader2")}</h1>
      </section>
      <section className="text-center">
        <h1 className="text-center text-xl font-bold my-4">
          {t("title", {
            type: tHome(type),
            date: new Date().toLocaleDateString(),
          })}
        </h1>
        <table id="printTable" style={{ width: "100%" }}>
          <tr className="text-center text-lg font-bold -mt-9">
            <th style={{ width: "6%" }}>{tHome("no")}</th>
            <th style={{ width: "40%" }}>{tHome("subject")}</th>
            <th style={{ width: "10%" }}>{tHome("id")}</th>
            <th style={{ width: "15%" }}>{tHome("from")}</th>
            <th style={{ width: "15%" }}>{tHome("files")}</th>
            <th style={{ width: "14%" }}>{tHome("note")}</th>
          </tr>
          {(type == "incoming" ? incomingData : outgoingData).map((v, i) => {
            let returnDom = (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{v.subject}</td>
                <td>{v._id}</td>
                <td>{v.department.join(` - `)}</td>
                <td>{v.files.length}</td>
                <td>{v.note}</td>
              </tr>
            );
            return returnDom;
          })}
          <tr>
            <td colSpan="4" className="text-base">
              {t("total")}
            </td>
            <td>{(type == "incoming" ? incomingData : outgoingData).reduce((pre,v)=>v.files.length+pre, 0)}</td>
            <td></td>
          </tr>
        </table>
      </section>
    </div>
  );
};

export default PrintDom;
