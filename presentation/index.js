// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
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
  magnum_v: require("../assets/magnum/OpenStack_Project_Magnum_vertical.png"),
  magnum_m: require("../assets/magnum/OpenStack_Project_Magnum_mascot.png"),
  osa_h: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_horizontal.png"),
  osa_v: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_vertical.png"),
  osa_m: require("../assets/openstack-ansible/OpenStack_Project_OpenStackAnsible_mascot.png"),
  glance_v: require("../assets/Glance/OpenStack_Project_Glance_vertical.png"),
  glance_h: require("../assets/Glance/OpenStack_Project_Glance_Horizontal.png"),
  nova_v: require("../assets/Nova/OpenStack_Project_Nova_vertical.png"),
  neutron_v: require("../assets/Neutron/OpenStack_Project_Neutron_vertical.png"),
  neutron_h: require("../assets/Neutron/OpenStack_Project_Neutron_Horizontal.png"),
  cinder_v: require("../assets/Cinder/OpenStack_Project_Cinder_vertical.png"),
  cinder_h: require("../assets/Cinder/OpenStack_Project_Cinder_horizontal.png"),
  heat_v: require("../assets/Heat/OpenStack_Project_Heat_vertical.png"),
  heat_h: require("../assets/Heat/OpenStack_Project_Heat_horizontal.png"),
  horizon_v: require("../assets/Horizon/OpenStack_Project_Horizon_vertical.png"),
  keystone_v: require("../assets/Keystone/OpenStack_Project_Keystone_vertical.png"),
  barbican_v: require("../assets/Barbican/OpenStack_Project_Barbican_vertical.png"),
  trove_v: require("../assets/Trove/OpenStack_Project_Trove_vertical.png"),
  telemetry_v: require("../assets/Telemetry/OpenStack_Project_Telemetry_vertical.png"),
  designate_v: require("../assets/Designate/OpenStack_Project_Designate_vertical.png"),
  sahara_v: require("../assets/Sahara/OpenStack_Project_Sahara_vertical.png"),
  rally_v: require("../assets/Rally/OpenStack_Project_Rally_vertical.png"),
  osa_dev_screenshot: require("../assets/github-archifleks.png"),
  osa_review_screenshot: require("../assets/os-review-screenshot.png"),
  magnum_bp: require("../assets/magnum_bp.png"),
  come: require("../assets/come.gif")
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
            <ListItem>Brings containers to OpenStack</ListItem>
            <ListItem>Started in 2014</ListItem>
            <ListItem>Big Tent</ListItem>
            <ListItem>Provide easy deployment of COE</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            COE
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            At first
          </Heading>
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
            COE
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Now
          </Heading>
          <Image src={images.kubernetes.replace("/", "")} height="200" padding="10"/>
          <Image src={images.swarm.replace("/", "")} height="200" padding="10"/>
          <Image src={images.mesos.replace("/", "")} height="200"padding="10"/>
          <Image src={images.dcos.replace("/", "")} height="200"padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            COE
          </Heading>
          <List textColor="tertiary">
            <ListItem>Docker 1.12</ListItem>
            <ListItem>Kubernetes 1.5</ListItem>
            <ListItem>DC/OS</ListItem>
            <ListItem>No Docker Swarm Mode</ListItem>
            <ListItem>Not all K8s recommended default</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Heading size={5} caps fit textColor="tertiary">
            Integration with OpenStack Services
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.3em">Magnum leverages OpenStack services</ListItem>
            <ListItem textSize="1.3em">To create cluster</ListItem>
            <ListItem textSize="1.3em">To provide storage</ListItem>
            <ListItem textSize="1.3em">To provide networking services</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Image src={images.heat_h.replace("/", "")} padding="5" height="120px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">Magnum leverages Heat to create COE</ListItem>
            <ListItem textSize="1.2em">Each drivers is a working heat stack</ListItem>
            <ListItem textSize="1.2em">Configuration is done with SoftwareConfig</ListItem>
            <ListItem textSize="1.2em">Allow to use other OpenStack resources</ListItem>
          </List>
          <CodePane
            lang="Bash"
            source={require("raw-loader!../assets/magnum-heat.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Heat
          </Heading>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/magnum-cluster-yaml.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Image src={images.neutron_h.replace("/", "")} padding="5" height="120px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">To create tenant network</ListItem>
            <ListItem textSize="1.1em">LBaaSv2 to enable multi master COE</ListItem>
            <ListItem textSize="1.1em">Allow creation of K8s Service LoadBalancer</ListItem>
            <ListItem textSize="1.1em">Flannel with host-gw (Allowed Address Pairs)</ListItem>
            <ListItem textSize="1.1em">Kuryr in near future ?</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Neutron
          </Heading>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/magnum-neutron-yaml.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Image src={images.cinder_h.replace("/", "")} padding="5" height="120px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Instance storage for /var/lib/docker</ListItem>
            <ListItem textSize="1.1em">Persistent storage for K8s PODs</ListItem>
            <ListItem textSize="1.1em">REX-Ray / docker-cinder volumes for Swarm</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum
          </Heading>
          <Image src={images.glance_h.replace("/", "")} padding="5" height="120px"/>
          <List textColor="tertiary">
            <ListItem textSize="1.1em">Store COE base image</ListItem>
            <ListItem textSize="1.1em">os_distro property for COE driver selection</ListItem>
            <ListItem textSize="1.1em">Can be used as a backend for Docker registry</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum Caveats
          </Heading>
          <List textColor="tertiary">
            <ListItem>Drivers are sync with OS releases</ListItem>
            <ListItem>COE features not all up to date</ListItem>
            <ListItem>Magnum production deployment ?</ListItem>
            <ListItem>Not enough drivers customization</ListItem>
            <ListItem>Mostly Fedora Atomic Drivers</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Magnum in production ?
          </Heading>
          <List textColor="tertiary">
            <ListItem>Not included in most distros</ListItem>
            <ListItem>Development is happening fast</ListItem>
            <ListItem>Backport upstream patches ?</ListItem>
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
            <ListItem textSize="1em">Ocata release (15.0) scheduled by 10 Mar 2017</ListItem>
          </List>
          <CodePane
            lang="Bash"
            source={require("raw-loader!../assets/osa-branch.example")}
            margin="10px auto"
          />
          <Image src={images.osa_h.replace("/", "")} height="130px" padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Text margin="20px auto auto" textColor="tertiary">Common services</Text>
          <Image src={images.keystone_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.nova_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.neutron_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.heat_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.glance_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.horizon_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.cinder_v.replace("/", "")} height="100" padding="10"/>
          <CodePane
            lang="Bash"
            source={require("raw-loader!../assets/osa-playbooks-core.example")}
            margin="10px auto"
          />
          <Text margin="20px auto auto" textColor="tertiary">Extra services</Text>
          <Image src={images.barbican_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.magnum_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.sahara_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.designate_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.trove_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.telemetry_v.replace("/", "")} height="100" padding="10"/>
          <Image src={images.rally_v.replace("/", "")} height="100" padding="10"/>
          <CodePane
            lang="bash"
            source={require("raw-loader!../assets/osa-playbooks-extra.example")}
            margin="10px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Packaging
          </Heading>
          <List textColor="tertiary">
            <ListItem>Local repository server</ListItem>
            <ListItem>Packages are built from sources</ListItem>
            <ListItem>Build pip wheel package</ListItem>
          </List>
          <Text caps textColor="secondary">Not easy to develop on project</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Enter developer mode
          </Heading>
          <List textColor="tertiary">
            <ListItem>Directly built from a Git repo</ListItem>
            <ListItem>Per project choice</ListItem>
            <ListItem>Deploy from custom branch/repo</ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/osa-dev-magnum.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Heading size={5} caps fit textColor="tertiary">
            Running Ocata and contributing upstream
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">OS and OSA roles on Ocata branch</ListItem>
            <ListItem textSize="1.2em">Magnum OSA role from master</ListItem>
            <ListItem textSize="1.2em">Custom magnum git repo</ListItem>
            <ListItem textSize="1.2em">Magnum from custom branch </ListItem>
          </List>
          <CodePane
            lang="YAML"
            source={require("raw-loader!../assets/magnum-osa-role.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Heading size={5} caps fit textColor="tertiary">
            Running Ocata and contributing upstream
          </Heading>
          <Image src={images.osa_dev_screenshot.replace("/", "")} height="330" padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            OpenStack Ansible
          </Heading>
          <Heading size={5} caps textColor="tertiary" margin="auto auto 20px">
            Development workflow
          </Heading>
          <Text textColor="tertiary" textSize="1.1em">Branch from master</Text>
          <Text textColor="secondary" textSize="1.1em">▼</Text>
          <Text textColor="tertiary" textSize="1.1em">Create patch set for customers</Text>
          <Text textColor="secondary" textSize="1.1em">▼</Text>
          <Text textColor="tertiary" textSize="1.1em">Propose fixes upstream</Text>
          <Text textColor="secondary" textSize="1.1em">▼</Text>
          <Text textColor="tertiary" textSize="1.1em">Periodically rebase / merge with master</Text>
          <Image src={images.osa_review_screenshot.replace("/", "")} height="200" padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Work in progress
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            Swarm Mode
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">Getting swarm mode to Work</ListItem>
            <ListItem textSize="1.2em">Fedora and CoreOS</ListItem>
            <ListItem textSize="1.2em">Docker 1.12 and Docker 1.13</ListItem>
            <ListItem textSize="1.2em">Cinder volume support</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} caps textColor="secondary">
            Work in progress
          </Heading>
          <Heading size={5} caps textColor="tertiary">
            K8s CoreOS
          </Heading>
          <List textColor="tertiary">
            <ListItem textSize="1.2em">Update driver to match Atomic features</ListItem>
            <ListItem textSize="1.2em">Add K8s recommended defaults</ListItem>
            <ListItem textSize="1.2em">Support RKT</ListItem>
            <ListItem textSize="1.2em">Support K8s addons</ListItem>
          </List>
          <Image src={images.magnum_bp.replace("/", "")} height="250" padding="10"/>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading textColor="primary" size={3} caps>
            Thank you !
          </Heading>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://github.com/ArchiFleKs">@ArchiFleKs</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://archifleks.github.io/osfr-02-2017">archifleks.github.io/osfr-02-2017</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" href="https://osones.com">osones.com</Link>
          </Text>
          <Text margin="10px auto auto">
            <Link textColor="primary" margin="10px auto auto" href="https://twitter.com/osones">@osones</Link>
          </Text>
          <Image src={images.come.replace("/", "")} height="250" padding="10"/>
          <Heading textColor="primary" size={4} caps>
            We're hiring !
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
