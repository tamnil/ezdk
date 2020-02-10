const dk = {
        rmia: {
            out: "docker rmi $(docker ps -a -q)",
            desc: ""
        },
        psa: { out: "docker ps -a", desc: " " },
        spa: { out: "docker system prune -a ", desc: " " },
        rma: { out: "docker rm $(docker ps -a -q)", desc: " " },
    "imp": { out: "docker image prune ", desc: " " },
    // "": { out: "", desc: " " },
    // "": { out: "", desc: " " },
    },
    dkc = {
        ub: {
            out: "docker-compose up --build",
            descr: "docker-compose up build"
        },
        u: {
            out: "docker-compose up --build",
            descr: "docker-compose up build"
        }
    // "": { out: "", desc: " " },
    // "": { out: "", desc: " " },
    // "": { out: "", desc: " " },
    };

module.exports = {
    dk,
    dkc
};
