const rangeBullet = extend(BasicBulletType, {});
rangeBullet.damage = 100;
rangeBullet.lifetime = 40;
rangeBullet.speed = 10;

const t4Weapon = extend(Weapon, "mm-t4-gun", {
    load() {
        this.super$load();
        this.ammo = 6;
    },
    shoot(unit, x, y, angle, left) {
        this.super$shoot(unit, x, y, angle, left);
        if (this.ammo > 1) {
            this.reload = 30;
            this.ammo--;
        } else {
            this.reload = 300;
            this.ammo = 6;
        }
    },
});

t4Weapon.reload = 30;
t4Weapon.bullet = rangeBullet;
t4Weapon.mirror = false;
t4Weapon.rotate = true;
t4Weapon.shootX = -8;
t4Weapon.shootY = 24;

const t4 = extend(UnitType, "t4", {});
t4.constructor = () => extend(LegsUnit, {});
t4.weapons.add(t4Weapon);

module.exports = t4;
