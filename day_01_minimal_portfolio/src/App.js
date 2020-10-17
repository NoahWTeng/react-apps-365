import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import {
  Fa500Px,
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import { data } from "./constants/";
import { Block, Text } from "./components";

export function App() {
  const [state, changeState] = useState({
    data: data,
  });

  const renderHeader = () => {
    return (
      <Block flex between center height="3em" absolute top left="0" right="0">
        <Fa500Px color="#b0b0b0" size="1.5em" />
        <FaBars color="#b0b0b0" size="1.5em" />
      </Block>
    );
  };

  return (
    <Block minHeight="100vh" relative>
      {renderHeader()}

      <Block padding="3em 0">
        <Block width="70%" margin="1em 0">
          <Text weight="bold" h1 margin=".5em 0">
            design like <br />
            there's no tomorrow.
          </Text>
          <Text caption secondary height="1.5em" around>
            Sunt elit enim elit quis eiusmod adipisicing esse officia deserunt.
            Voluptate aliqua voluptate consequat aliqua cupidatat fugiat est
            proident in.
          </Text>
        </Block>
        <Block flex row>
          <Block flex column>
            <Block width="100%" margin="0 0 1em 0">
              <img
                src={state.data[0].image}
                alt="this is car image"
                style={{ width: "100%", height: "100%" }}
              />
              <Text>
                Sunt elit enim elit quis eiusmod adipisicing esse officia.
              </Text>
              <Text>
                Sunt elit enim elit quis eiusmod adipisicing esse officia.
              </Text>
            </Block>
          </Block>
          <Block flex column>
            <Block width="100%">
              <img
                src={state.data[0].image}
                alt="this is car image"
                style={{ width: "100%", height: "100%" }}
              />
              <Text>
                Sunt elit enim elit quis eiusmod adipisicing esse officia.
              </Text>
              <Text>
                Sunt elit enim elit quis eiusmod adipisicing esse officia.
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block flex between center height="3em" absolute bottom width="100%">
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
    </Block>
  );
}

export default hot(App);
