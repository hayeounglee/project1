import styled from "styled-components";
import App from "./App";

const Card = styled.div`
  display: flex;
  height: 150px;
  width: 300px;
  background-color: gray;
  align-items: center; //아이템들이 수직 중앙 정렬
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
`;

const Title = styled.div`
  font-size: 22px;
  color: white;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 4px;
`;


const Text = styled.div`//style.p는 왜 안돼
  font-size: 10px;
  color: black;
  margin-left: 8px;
`;


const PostCard4 = () => {
    return (
        <>
            <Card>
                <CardImage src="https://i1.sndcdn.com/artworks-oEqf1CL9PnD5-0-t500x500.jpg" alt="post image" />
                <TextContainer>
                    <Title> Golden Hour</Title>
                    <Text> Album by Jake Walters</Text>
                </TextContainer>
            </Card>
        </>
    );
};

export default PostCard;