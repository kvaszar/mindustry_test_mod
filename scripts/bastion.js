const bastion = extend(UnitType, "bastion", {
    spawn(team, x, y, rotation, cons) {
        print("hello");
        print(this);
        print(team);
        this.super$spawn(team, x, y, rotation, cons);
    },
    update(unit) {
        if (unit.isShooting) {
            unit.vel.scl(0);
        }
        this.super$update(unit);
    },
});
bastion.constructor = () => extend(LegsUnit, {});

module.exports = bastion;
