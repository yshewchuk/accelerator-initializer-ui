/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import defaultLogo from '../../static/images/default-icon.png'

const springBootTemplate =  {
    type: "JAVA_SPRING_BOOT",
    card: {
        title: "Java Spring Boot",
        imgSrc: defaultLogo,
        description: "app.home.templates.java.spring.boot.description",
        projectStack: ["java 8", "boot 1.5.15", "gradle 3.5.1"],
        deployStack: [
        ]
    }    
}

const springBoot2Template =  {
    type: "JAVA_SPRING_BOOT_2",
    card: {
        title: "Java Spring Boot 2",
        imgSrc: defaultLogo,
        description: "app.home.templates.java.spring.boot2.description",
        projectStack: ["java 8", "boot 2.0.4", "gradle 4.5.1"],
        deployStack: [
        ]
    }    
}

const javaLibraryTemplate =  {
    type: "JAVA_LIBRARY",
    card: {
        title: "Java Library",
        imgSrc: defaultLogo,
        description: "app.home.templates.java.library.description",
        projectStack: ["java 8", "gradle 3.5"],
        deployStack: [
        ]
    }    
}

const nodeTemplate = {
    type: "NODE",
    card: {
        title: "Node.js Project",
        imgSrc: defaultLogo,
        description: "app.home.templates.nodejs.description",
        projectStack: ["es6", "express", "mocha", "chai"],
        deployStack: [
        ]
    }
}

const reactTemplate = {
    type: "REACT",
    card: {
        title: "React",
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        description: "app.home.templates.react.description",
        projectStack: ["es6", "react", "mocha", "chai"],
        deployStack: [
        ]
    }
}

const templatesArray = [springBootTemplate, springBoot2Template, javaLibraryTemplate, nodeTemplate, reactTemplate]
const templateMap = {
    JAVA_SPRING_BOOT :  springBootTemplate,
    JAVA_SPRING_BOOT_2: springBoot2Template,
    JAVA_LIBRARY: javaLibraryTemplate,
    NODE: nodeTemplate,
    REACT: reactTemplate
}

export const templates = templatesArray
export const findTemplateByType = type => templateMap[type]





