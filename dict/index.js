const dk = {
        rmia: {
            out: "docker rmi $(docker ps -a -q)",
            desc: ""
        },
        psa: { out: "docker ps -a", desc: " " },
        spa: { out: "docker system prune -a ", desc: " " },
        rma: { out: "docker rm $(docker ps -a -q)", desc: " " },
        impf: { out: "docker image prune -force", desc: " " },
        impfa: { out: "docker image prune -force -a", desc: " " },
        ls: { out: "docker network ls", desc: " " },
        nlsq: { out: "docker network ls --quiet", desc: " " },
        npf: { out: "docker network prune --force", desc: " " },
        nc: { out: "docker network connect", desc: " " },
        nd: { out: "docker network disconnect", desc: " " },
        np: { out: "docker network prune --force", desc: " " },
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
