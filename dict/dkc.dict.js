/**
 * Docker-compose  shortcut file
 *
 *  `<shortcutName>`: { out: `<command>`, desc: `<description ` },
 *
 */
const dkc = arg => ({
    ub: {
        out: `docker-compose up --build`,
        descr: `docker-compose up build`
    },
    u: {
        out: `docker-compose up --build`,
        descr: `docker-compose up build`
    }
    // ``: { out: ``, desc: ` ` },
    // ``: { out: ``, desc: ` ` },
});

module.exports = dkc;
