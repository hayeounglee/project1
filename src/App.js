import styled from "styled-components";
import PostCard from "./PostCard.js";
import PostCard2 from "./PostCard2.js";
import PostCard3 from "./PostCard3.js";
import PostCard4 from "./PostCard4.js";


const MainContainer = styled.div`
  display: flex;
  height: 100vh; //�θ� ����� ���̰� ����Ʈ ���̿� ���ٸ�(��..)
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
  justify-content: center;//���� ����
  align-items: center; //���� ����
//�ᱹ �Ѱ�� ����
`;

const PostCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;//������ ���� ����
  justify-content: space-between;

`;

const PostCardWrapper = styled.div`
  width:35%;
  margin-bottom: 20px;
  /* PostCard ��� ���� ���� ������ �ֱ� ���� margin-right �߰� */
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
