import styled from "styled-components";
import PostCard from "./PostCard.js";
import PostCard2 from "./PostCard2.js";
import PostCard3 from "./PostCard3.js";
import PostCard4 from "./PostCard4.js";


const MainContainer = styled.div`
  display: flex;
  height: 100vh; //부모 요소의 높이가 뷰포트 높이와 같다면(흠..)
`;

const LeftComponent = styled.div`
  position: relative;
  width: 30%;
  background-color: gray;
`;

const LeftText = styled.div`
  font-size: 100px;
  color: white;
  position: absolute;
  bottom: 0;
 margin-left: 8px;
`;

const RightComponent = styled.div`
  width: 70%;
  background-color: white;

  display: flex;
  justify-content: center;//수평 정렬
  align-items: center; //수직 정렬
//결국 한가운데 정렬
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;//수직축 방향 정렬
  justify-content: space-between;

`;

const PostCardWrapper = styled.div`
  width:35%;
  margin-bottom: 20px;
  /* PostCard 요소 간에 가로 여백을 주기 위해 margin-right 추가 */
  margin-left: 10%;
  margin-right: 5%;
`;

const App = () => {
    return (
        <>
            <MainContainer>
                <LeftComponent>
                    <LeftText>Hippo's MP3</LeftText> 
                </LeftComponent>
                <RightComponent>
                <PostCardContainer>
                        <PostCardWrapper>
                            <PostCard />
                        </PostCardWrapper>
                        <PostCardWrapper>
                            <PostCard2 />
                        </PostCardWrapper>
                        <PostCardWrapper>
                            <PostCard3 />
                        </PostCardWrapper>
                        <PostCardWrapper>
                            <PostCard4 />
                        </PostCardWrapper>
                  </PostCardContainer>
                </RightComponent>
            </MainContainer>
        </>
    );
};

export default App;
