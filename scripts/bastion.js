const bastion = extend(UnitType, "bastion", {
    update(unit) {
        this.super$update(unit);
        if (unit.isShooting) {
            unit.vel.scl(0);
        }
    },
});
bastion.constructor = () => extend(LegsUnit, {});

module.exports = bastion;
