// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  MarkdownSlides,
  Quote,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  osones: require("../assets/OSONES_LOGO.png"),
  osones_nfw: require("../assets/OSONES_LOGO_NOFRAME_W.png"),
  osones_w: require("../assets/OSONES_LOGO_W.png"),
  osones_e: require("../assets/logo-osones-expertise.png"),
  usergroup_h: require("../assets/OpenStack_UserGroup_FranceParis_horizontal.png"),
  openstack_h: require("../assets/openstack_h.png"),
  osones_pnf: require("../assets/OSONES_PICTO_NOFRAME.png"),
  magnum_pn: require("../assets/magnum_pn.png"),
  swarm: require("../assets/swarm.png"),
  mesos: require("../assets/mesos-logo.png"),
  kubernetes: require("../assets/kubernetes-logo.png"),
  dcos: require("../assets/dcos.png"),
  magnum_h: require("../assets/magnum/OpenStack_Project_Magnum_horizontal.png"),
  magnum_v: require("../assets/magnum/OpenStack_Project_Magnum_horizontal.png"),
  magnum_m: require("../assets/magnum/OpenStack_Project_Magnum_horizontal.png"),
  osa_h: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_horizontal.png"),
  osa_v: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_vertical.png"),
  osa_m: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_mascot.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#b50000",
  tertiary: "#076678",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} progress="bar" transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Magnum
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Containers Orchestration on OpenStack
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.openstack_h.replace("/", "")} margin="1.5em auto auto" height="100px"/>
            </Fill>
            <Fill>
              <Image src={images.usergroup_h.replace("/", "")} margin="1.5em auto auto" height="100px"/>
            </Fill>
          </Layout>
          <Heading size={1} fit caps margin="50px auto auto" textColor="tertiary">
            Kevin Lefevre - Meetup OpenStack FR - 28/02/2017
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            whoami
          </Heading>
          <Text margin="40px auto auto" textColor="tertiary">Cloud and Devops Engineer<Link textColor="secondary" href="https://twitter.com/osones"> @osones</Link></Text>
          <Link href="https://osones.com"><Image src={images.osones_e.replace("/", "")} margin="20px auto auto" height="100px"/></Link>
          <Text margin="20px auto auto" textColor="tertiary">Work on OpenStack and AWS</Text>
          <Text margin="40px auto auto" textColor="tertiary">I ❤  Docker and K8s</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum at glance
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.magnum_h.replace("/", "")} margin="1.5em auto auto" height="150px"/>
            </Fill>
            <Fill>
              <Link href="https://www.openstack.org/software/releases/newton/components/magnum"><Image src={images.magnum_pn.replace("/", "")} margin="1.5em auto auto" height="150px"/></Link>
            </Fill>
          </Layout>
          <List margin="20px auto auto" textColor="tertiary">
            <ListItem>Bring containers to OpenStack</ListItem>
            <ListItem>Started in 2014</ListItem>
            <ListItem>Big Tent</ListItem>
            <ListItem>Provide easy deployment of COE</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            COE Evolution
          </Heading>
          <Text textColor="tertiary">At first only</Text>
          <Image src={images.kubernetes.replace("/", "")} height="200" padding="10"/>
          <Text textColor="tertiary">Rewrite of the Kubernetes API</Text>
          <CodePane
            lang="bash"
            source={require("raw-loader!../assets/magnum_oldcli.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            COE Evolution
          </Heading>
          <Text textColor="tertiary">Now</Text>
          <Image src={images.kubernetes.replace("/", "")} height="200" padding="10"/>
          <Image src={images.swarm.replace("/", "")} height="200" padding="10"/>
          <Image src={images.mesos.replace("/", "")} height="200"padding="10"/>
          <Image src={images.dcos.replace("/", "")} height="200"padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum in production ?
          </Heading>
          <List textColor="tertiary">
            <ListItem>Not included in most ditros</ListItem>
            <ListItem>Development is happening really fast</ListItem>
            <ListItem>Backport upstream patches</ListItem>
            <ListItem>Docker and Kubernetes releases cycle ?</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1em">Originally developed by Rackspace</ListItem>
            <ListItem textSize="1em">Set of Ansible playbooks to deploy OpenStack</ListItem>
            <ListItem textSize="1em">Uses LXC to run services in containers</ListItem>
            <ListItem textSize="1em">Ocata releases scheduled by 10 Mar 2017</ListItem>
          </List>
          <CodePane
            lang="bash"
            source={require("raw-loader!../assets/osa-branch.example")}
            margin="10px auto"
          />
          <Image src={images.osa_h.replace("/", "")} height="130px" padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <List textColor="tertiary">
            <ListItem>Common "Core" services:</ListItem>
            <CodePane
              lang="bash"
              source={require("raw-loader!../assets/osa-playbooks-core.example")}
              margin="20px auto"
            />
            <ListItem>Extra services:</ListItem>
            <CodePane
              lang="bash"
              source={require("raw-loader!../assets/osa-playbooks-extra.example")}
              margin="20px auto"
            />
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
