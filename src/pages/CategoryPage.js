import React from "react";
import * as S from "../components/Styles";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const params = useParams();

  return (
    <S.PageWrapper>
      <div>Category Page {Number(params.id)}</div>
    </S.PageWrapper>
  );
}

export default CategoryPage;
