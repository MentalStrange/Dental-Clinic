import { faqs } from "./../../assets/data/faqs";
import FaqItem from "./faqItem";
function FaqList() {
  return (
    <>
      <ul>
        {faqs.map((item, index) => {
          return <FaqItem item={item} index={index} key={index} />;
        })}
      </ul>
    </>
  );
}

export default FaqList;
