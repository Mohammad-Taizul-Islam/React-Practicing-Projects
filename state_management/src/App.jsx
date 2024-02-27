import "./App.css";
import Av_Contadiction_Of_State from "./Av_Contadiction_Of_State";
import NameForm from "./NameForm";
import SharingState from "./SharingState";
import SimpleForm from "./SimpleForm";
import ConditionalRendering from "./ConditionalRendering";
import PreserveAndResetingState from "./PreserveAndResetingState";
import TodoTaskReducer from "./TodoTaskReducer";
import Section from "./PassinDataDeplyWithContext/Section";
import Heading from "./PassinDataDeplyWithContext/Heading";

function App() {
  const counter = <PreserveAndResetingState />;
  return (
    <>
      <SimpleForm />
      <NameForm />
      <SharingState />
      <Av_Contadiction_Of_State />
      <ConditionalRendering />
      <div>{counter}</div>
      <TodoTaskReducer />
      //basic level of Props passing....
      {/* 
      <Section>
        <Heading level={1}> Title </Heading>
        <Heading level={2}> Heading </Heading>
        <Heading level={3}> Sub-heading </Heading>
        <Heading level={4}> Sub-sub-heading </Heading>
        <Heading level={5}> Sub-sub-sub-heading </Heading>
        <Heading level={6}> Sub-sub-sub-sub-heading </Heading>
      </Section> */}
      {/* <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section level={4}>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}
      //dynemic leveling.........
      {/* <Section>
        <Heading>Title</Heading>
        <Section>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Heading>Sub-heading</Heading>
            <Section>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
              <Heading>Sub-sub-heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section> */}
      <Section>
        <Heading>My Profile</Heading>
        <Post title="Hello Traveller" body="Read about my adventure" />
        <AllPosts />
      </Section>
    </>
  );
}

export default App;

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  );
}
