import apache from "./apache.png";
import centos from "./centos.png";
import debian from "./debian.png";
import java from "./java.png";
import linux from "./linux.png";
import window from "./microsoft.png";
import mysql from "./mysql.png";
import oracle from "./oracle_linux.png";
import python from "./python.png";
import redhat from "./red_hat.png";
import shell from "./shell.png";
import suse from "./suse.png";
import system from "./system.png";
import ubuntu from "./ubuntu.png";
import unix from "./unix.png";
import unknown from "./unknown.png";
import tomcat from "./tomcat.png";

interface IconsType {
  [key: string]: string;
}

const icons: IconsType = {
  apache,
  centos,
  debian,
  java,
  oracle,
  linux,
  window,
  mysql,
  python,
  redhat,
  shell,
  suse,
  system,
  ubuntu,
  unix,
  unknown,
  tomcat,
};

export default icons;
