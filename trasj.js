<Jumbotron>
  {/* <div className="Header-header"> */}
  <h1 className="type1">Kevin Jolley</h1>
  <p className="type2"> Skills</p>
  <Container className="typeRow">
    <Row>
      <Col sm="4" className="headRow">
        <h1 className="type3"> Languages </h1>
        <ul className="type4">
          <li> JavaScript </li>
          <li> HTML5 </li>
          <li> CSS/LESS/SCSS </li>
        </ul>
      </Col>
      <Col sm="4" className="headRow">
        <h1 className="type3"> Front-End </h1>
        <ul className="type4">
          <li> React.js </li>
          <li> Bootstrap </li>
        </ul>
      </Col>
      <Col sm="4" className="headRow">
        <h1 className="type3"> Back-End </h1>
        <ul className="type4">
          <li> Node.js </li>
          <li> MongoDB </li>
        </ul>
      </Col>
    </Row>
  </Container>
  {/* <p className="checkMe">Let's build something together</p> */}
  {/* </div> */}
</Jumbotron>;

//

{
  /* <p className="type2"> Skills</p> */
}
<Container className="typeRow">
  <Row>
    <Col sm="4" className="headRow">
      <h1 className="type3"> Languages </h1>
      <ul className="type4">
        <li> JavaScript </li>
        <li> HTML5 </li>
        <li> CSS/LESS/SCSS </li>
      </ul>
    </Col>
    <Col sm="4" className="headRow">
      <h1 className="type3"> Front-End </h1>
      <ul className="type4">
        <li> React.js </li>
        <li> Bootstrap </li>
      </ul>
    </Col>
    <Col sm="4" className="headRow">
      <h1 className="type3"> Back-End </h1>
      <ul className="type4">
        <li> Node.js </li>
        <li> MongoDB </li>
      </ul>
    </Col>
  </Row>
</Container>;
{
  /* <p className="checkMe">Let's build something together</p> */
}
{
  /* </div> */
}

//

<div>
<Progress
  type="circle"
  percent={80}
  width={200}
  format={() => 'JavaScript'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={90}
  width={200}
  format={() => 'React'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={40}
  width={200}
  format={() => 'Ember'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={100}
  width={200}
  format={() => 'Bootstrap'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={100}
  width={200}
  format={() => 'HTML'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={100}
  width={200}
  format={() => 'CSS'}
  className="progB"
  status={'active'}
/>
<Progress
  type="circle"
  percent={70}
  width={200}
  format={() => 'LESS'}
  className="progB"
  status={'active'}
/>
</div>