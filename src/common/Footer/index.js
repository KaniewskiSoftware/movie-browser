import Button from "./Button";
import { Wrapper } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";

const Footer = () => {
  const queryparam = +useQueryParameter("page");
  const page = queryparam ? queryparam : 1;

  const replaceQueryParameter = useReplaceQueryParameter();
  const setPage = (page) => {
    replaceQueryParameter({
      key: "page",
      value: page,
    });
  };

  const firstPage = () => {
    setPage(1);
  };
  const nextPage = () => {
    if (page < 500) setPage(page + 1);
  };
  const prevPage = () => {
    if (page !== 1) setPage(page - 1);
  };
  const lastPage = () => {
    setPage(500);
  };

  return (
    <Wrapper>
      <Button onClick={firstPage} title="First" />
      <Button onClick={prevPage} title="Previous" />
      <p>Page {page} of 500</p>
      <Button onClick={nextPage} rotate title="Next" />
      <Button onClick={lastPage} rotate title="Last" />
    </Wrapper>
  );
};

export default Footer;
