/**
 * Docker-compose  shortcut file
 *
 * `<shortcutName>`: { out: `<command>`, desc: `<description ` },
 *
 */

const dk = {
    rmia: {
        out: "docker rmi $(docker ps -a -q)",
        desc: ""
    },
    psa: { out: "docker ps -a", desc: " " },
    spa: { out: "docker system prune -a ", desc: " " },
    rma: { out: "docker rm $(docker ps -a -q)", desc: " " },
    ims: { out: "docker images ", desc: " " },
    impf: { out: "docker image prune -force", desc: " " },
    impfa: { out: "docker image prune -force -a", desc: " " },
    nls: { out: "docker network ls", desc: " " },
    nlsq: { out: "docker network ls --quiet", desc: " " },
    npf: { out: "docker network prune --force", desc: " " },
    np: { out: "docker network prune --force", desc: " " },
    imb: { out: "docker image build . ", desc: " " },
    bb: { out: "docker builder build . ", desc: " " },
    bp: { out: "docker builder prune -f", desc: " " },
    v: { out: "docker version", desc: " " },
    eit: { out: "docker exec -it ", desc: " " }
};

module.exports = dk;
