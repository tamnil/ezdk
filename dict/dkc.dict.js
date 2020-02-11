/**
 * Docker-compose  shortcut file
 *
 *  `<shortcutName>`: { out: `<command>`, desc: `<description ` },
 *
 */
const dkc = {
    ub: {
        out: "docker-compose up --build",
        descr: "docker-compose up build"
    },
    u: {
        out: "docker-compose up",
        descr: "docker-compose up"
    },
    d: {
        out: "docker-compose down",
        descr: "docker-compose down"
    },
    b: {
        out: "docker-compose build",
        descr: "docker-compose build"
    },

    ev: {
        out: "docker-compose events",
        descr: "docker-compose events"
    },
    res: {
        out: "docker-compose restart",
        descr: "docker-compose restart"
    },
    p: {
        out: "docker-compose pause",
        descr: "docker-compose pause"
    },

    unp: {
        out: "docker-compose unpause",
        descr: "docker-compose unpause"
    },
    im: { out: "docker-compose images", desc: " " },
    l: { out: "docker-compose logs", desc: " " }
};

module.exports = dkc;
