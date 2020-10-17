import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import {
  Fa500Px,
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { data } from "./constants/";
import { Block, Text, Button } from "./components";

export function App() {
  const [state, changeState] = useState({
    datas: [],
    rightDatas: [],
    leftDatas: [],
    init: 0,
    finish: 6,
  });

  useEffect(() => {
    const datas = data.slice(state.init, state.finish);
    const leftDatas = datas.filter((_, idx) => idx % 2 === 0);
    const rightDatas = datas.filter((_, idx) => idx % 2 !== 0);

    changeState((s) => ({ ...s, datas, leftDatas, rightDatas }));

    return () => {};
  }, [state.init, state.finish]);

  const renderTitle = (item) => {
    return (
      <Block margin="4em 2em" flex column height="80px">
        <Text title="true" weight="bold" margin="0 0 1em">
          {item.title}
        </Text>
        <Text caption transform="uppercase" secondary spacing="0.15em">
          {item.subtitle}
        </Text>
      </Block>
    );
  };

  const renderHeader = () => {
    return (
      <Block flex between center height="3em" relative>
        <Fa500Px size="1.5em" />
        <FaBars size="1.5em" />
      </Block>
    );
  };

  const renderFooter = () => {
    return (
      <Block flex between center height="3em" width="100%" absolute bottom>
        <Block>
          <Text weight="bold">made for project365.design</Text>
        </Block>
        <Block flex center>
          <Text weight="bold">we're social</Text>
          <Block margin="0 1em 0 1.5em">
            <FaFacebookF color="#b0b0b0" />
          </Block>
          <Block margin="0 1em 0 0">
            <FaTwitter color="#b0b0b0" />
          </Block>
          <Block>
            <FaDribbble color="#b0b0b0" />
          </Block>
        </Block>
      </Block>
    );
  };

  return (
    <Block minHeight="100vh" relative>
      {renderHeader()}
      <Block padding="3em 0" margin="1em 0">
        <Block width="60%">
          <Text weight="bold" h1 margin=".5em 0">
            design like <br />
            there's no tomorrow.
          </Text>
          <Text caption secondary height="1.5em" around>
            Sunt elit enim elit quis eiusmod adipisicing esse officia deserunt.
            Voluptate aliqua voluptate consequat aliqua cupidatat fugiat est
            proident in. Ea nisi consequat ipsum est Lorem non fugiat occaecat
            dolor eiusmod excepteur et laborum minim.
          </Text>
        </Block>
        <Block flex row margin="6em 0 0" height="100%">
          <Block width="90%">
            {state.leftDatas.map((item, idx) => {
              return (
                <Block
                  flexNumb="0 50%"
                  column
                  key={`${item.title}_${idx}`}
                  padding="0 3em 0 0"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {renderTitle(item)}
                </Block>
              );
            })}
          </Block>
          <Block width="90%" padding="10em 0 0">
            {state.rightDatas.map((item, idx) => {
              return (
                <Block
                  flexNumb="0 50%"
                  column
                  key={`${item.title}_${idx}`}
                  padding="0 0 0 3em"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  {renderTitle(item)}
                </Block>
              );
            })}
          </Block>
        </Block>
        <Block flex middle margin="0 0 3em">
          <Button
            color="white"
            padding="1em 8em"
            border="0.1em solid #ddd"
            radius="2em"
            onClick={() => changeState((s) => ({ ...s, finish: s.finish + 4 }))}
          >
            <Text weight="bold" subtitle>
              load more.
            </Text>
          </Button>
        </Block>
      </Block>
      {renderFooter()}
    </Block>
  );
}

export default hot(App);
