import Button from "./Button";
import { Counter, Span, Wrapper } from "./styled";
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
      <Button disabled={page === 1} onClick={firstPage} title="First" />
      <Button disabled={page === 1} onClick={prevPage} title="Previous" />
      <Counter>
        Page <Span>{page}</Span> of <Span> 500</Span>
      </Counter>
      <Button disabled={page === 500} onClick={nextPage} rotate title="Next" />
      <Button disabled={page === 500} onClick={lastPage} rotate title="Last" />
    </Wrapper>
  );
};

export default Footer;
