// PROTOTYPE - NOT FOR PRODUCTION
// Question: Chuỗi gom tu vi → liều đột phá → chuyển thế có cuốn người chơi trong một buổi không?
// Date: 2026-11-25
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- Thiền định (click) ----
  click_base: { value: 1, min: 0.1, max: 20, step: 0.1 },        // linh khí per click before multipliers
  click_share: { value: 0.05, min: 0, max: 1, step: 0.01 },      // a click also gives this share of one second of production

  // ---- Nguồn tu luyện (8 sources): cost in linh khí, rate in linh khí/second each ----
  cost_growth: { value: 1.15, min: 1.01, max: 1.5, step: 0.01 }, // each copy costs this times the last
  src1_cost: { value: 10, min: 1, max: 1e3, step: 1 },     src1_rate: { value: 1, min: 0.1, max: 100, step: 0.1 },
  src2_cost: { value: 80, min: 1, max: 1e4, step: 1 },     src2_rate: { value: 6, min: 0.1, max: 1e3, step: 0.5 },
  src3_cost: { value: 700, min: 1, max: 1e5, step: 10 },   src3_rate: { value: 35, min: 1, max: 1e4, step: 1 },
  src4_cost: { value: 6000, min: 1, max: 1e6, step: 100 }, src4_rate: { value: 200, min: 1, max: 1e5, step: 5 },
  src5_cost: { value: 55000, min: 1, max: 1e7, step: 1000 }, src5_rate: { value: 1200, min: 1, max: 1e6, step: 50 },
  src6_cost: { value: 5e5, min: 1, max: 1e8, step: 1e4 },  src6_rate: { value: 7000, min: 1, max: 1e7, step: 100 },
  src7_cost: { value: 5e6, min: 1, max: 1e9, step: 1e5 },  src7_rate: { value: 40000, min: 1, max: 1e8, step: 1000 },
  src8_cost: { value: 5e7, min: 1, max: 1e10, step: 1e6 }, src8_rate: { value: 250000, min: 1, max: 1e9, step: 5000 },
  milestone_mult: { value: 2, min: 1, max: 5, step: 0.25 },      // a source's output multiplies by this at 10, 25, 50, 100, 200 owned

  // ---- Cảnh giới and đột phá ----
  tuvi_base: { value: 50, min: 5, max: 1000, step: 5 },          // tu vi needed to leave Phàm Nhân
  tuvi_growth: { value: 9, min: 2, max: 30, step: 0.5 },         // each realm needs this many times the last
  realm_mult: { value: 1.5, min: 1, max: 4, step: 0.05 },        // every realm reached multiplies all production
  chance_start: { value: 0.95, min: 0.1, max: 1, step: 0.01 },   // base success chance leaving Luyện Khí (leaving Phàm Nhân is always sure)
  chance_drop: { value: 0.08, min: 0, max: 0.2, step: 0.01 },    // base chance falls this much per realm after that
  chance_min: { value: 0.25, min: 0.01, max: 1, step: 0.01 },    // base chance never falls below this
  chance_cap: { value: 0.97, min: 0.5, max: 1, step: 0.01 },     // waiting and experience can raise the chance up to this
  overflow_bonus: { value: 0.25, min: 0, max: 1, step: 0.01 },   // +chance per extra full threshold of tu vi held when trying (the waiting gamble)
  exp_bonus: { value: 0.08, min: 0, max: 0.5, step: 0.01 },      // +chance per failure at this realm (Kinh nghiệm)
  fail_loss: { value: 0.3, min: 0, max: 1, step: 0.05 },         // share of tu vi lost on a failed breakthrough
  tamma_time: { value: 30, min: 0, max: 300, step: 5 },          // seconds of tâm ma after a failure
  tamma_mult: { value: 0.5, min: 0.05, max: 1, step: 0.05 },     // production multiplier during tâm ma

  // ---- Chuyển thế (prestige) ----
  prestige_min_realm: { value: 4, min: 1, max: 9, step: 1 },     // realm index (4 = Nguyên Anh) that opens Chuyển thế
  prestige_div: { value: 1e4, min: 100, max: 1e8, step: 100 },   // Đạo tâm gained = floor(sqrt(linh khí earned this life / prestige_div))
  daotam_bonus: { value: 0.1, min: 0.01, max: 1, step: 0.01 },   // each Đạo tâm adds this share to all production

  // ---- Bế quan (away earnings) ----
  offline_rate: { value: 0.5, min: 0, max: 1, step: 0.05 },      // share of production earned while the tab is closed
  offline_cap_h: { value: 8, min: 0, max: 72, step: 1 },         // hours of away time counted at most
  offline_min_s: { value: 60, min: 0, max: 3600, step: 10 },     // shorter absences show no report

  autosave_s: { value: 5, min: 1, max: 60, step: 1 },            // seconds between saves
  count_speed: { value: 8, min: 1, max: 30, step: 1 },           // how fast shown totals catch up (per second)
};
