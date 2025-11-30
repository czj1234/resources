var db = new Sdb("localhost",11810,"admin","adminecm");
var beginID = 0;
// -------------------------------------------------------------
if (beginID <= 0) {
println("[ID: 0]")
try{
   try{ db.createCS("bdp_f_sdb_gsms_msg_ticket_statereport_2026", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_gsms_msg_ticket_statereport_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_gsms_msg_ticket_statereport_2026").createCL("f_sdb_gsms_msg_ticket_statereport_2026", {ShardingType: "hash", ShardingKey: {"id":1,"phoneno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_gsms_msg_ticket_statereport_2026.f_sdb_gsms_msg_ticket_statereport_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_gsms_msg_ticket_statereport").attachCL("bdp_f_sdb_gsms_msg_ticket_statereport_2026.f_sdb_gsms_msg_ticket_statereport_2026",  {LowBound: {senddate: "20260101"}, UpBound: {senddate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_gsms_msg_ticket_statereport_2026.f_sdb_gsms_msg_ticket_statereport_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 1) {
println("[ID: 1]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601").createCL("o_espm_bs_eshop_cloud_box_push_logs_his_202601", {ShardingType: "hash", ShardingKey: {"box_sn":1,"staff_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601.o_espm_bs_eshop_cloud_box_push_logs_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_cloud_box_push_logs_his").attachCL("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601.o_espm_bs_eshop_cloud_box_push_logs_his_202601",  {LowBound: {create_time: "2026-01-01"}, UpBound: {create_time: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202601.o_espm_bs_eshop_cloud_box_push_logs_his_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 2) {
println("[ID: 2]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604").createCL("o_espm_bs_eshop_cloud_box_push_logs_his_202604", {ShardingType: "hash", ShardingKey: {"box_sn":1,"staff_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604.o_espm_bs_eshop_cloud_box_push_logs_his_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_cloud_box_push_logs_his").attachCL("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604.o_espm_bs_eshop_cloud_box_push_logs_his_202604",  {LowBound: {create_time: "2026-04-01"}, UpBound: {create_time: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202604.o_espm_bs_eshop_cloud_box_push_logs_his_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 3) {
println("[ID: 3]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607").createCL("o_espm_bs_eshop_cloud_box_push_logs_his_202607", {ShardingType: "hash", ShardingKey: {"box_sn":1,"staff_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607.o_espm_bs_eshop_cloud_box_push_logs_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_cloud_box_push_logs_his").attachCL("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607.o_espm_bs_eshop_cloud_box_push_logs_his_202607",  {LowBound: {create_time: "2026-07-01"}, UpBound: {create_time: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202607.o_espm_bs_eshop_cloud_box_push_logs_his_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 4) {
println("[ID: 4]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610").createCL("o_espm_bs_eshop_cloud_box_push_logs_his_202610", {ShardingType: "hash", ShardingKey: {"box_sn":1,"staff_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610.o_espm_bs_eshop_cloud_box_push_logs_his_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_cloud_box_push_logs_his").attachCL("bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610.o_espm_bs_eshop_cloud_box_push_logs_his_202610",  {LowBound: {create_time: "2026-10-01"}, UpBound: {create_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_cloud_box_push_logs_his_202610.o_espm_bs_eshop_cloud_box_push_logs_his_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 5) {
println("[ID: 5]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601").createCL("o_espm_bs_eshop_sendorderdetail_his_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601.o_espm_bs_eshop_sendorderdetail_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_sendorderdetail_his").attachCL("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601.o_espm_bs_eshop_sendorderdetail_his_202601",  {LowBound: {createdate: "2026-01-01"}, UpBound: {createdate: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202601.o_espm_bs_eshop_sendorderdetail_his_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 6) {
println("[ID: 6]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607").createCL("o_espm_bs_eshop_sendorderdetail_his_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607.o_espm_bs_eshop_sendorderdetail_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_sendorderdetail_his").attachCL("bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607.o_espm_bs_eshop_sendorderdetail_his_202607",  {LowBound: {createdate: "2026-07-01"}, UpBound: {createdate: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_sendorderdetail_his_202607.o_espm_bs_eshop_sendorderdetail_his_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 7) {
println("[ID: 7]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601").createCL("o_espm_bs_eshop_wechatpushsend_his_202601", {ShardingType: "hash", ShardingKey: {"unionno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601.o_espm_bs_eshop_wechatpushsend_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_wechatpushsend_his").attachCL("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601.o_espm_bs_eshop_wechatpushsend_his_202601",  {LowBound: {createtime: "2026-01-01"}, UpBound: {createtime: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202601.o_espm_bs_eshop_wechatpushsend_his_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 8) {
println("[ID: 8]")
try{
   try{ db.createCS("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607").createCL("o_espm_bs_eshop_wechatpushsend_his_202607", {ShardingType: "hash", ShardingKey: {"unionno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607.o_espm_bs_eshop_wechatpushsend_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_bs_eshop_wechatpushsend_his").attachCL("bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607.o_espm_bs_eshop_wechatpushsend_his_202607",  {LowBound: {createtime: "2026-07-01"}, UpBound: {createtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_bs_eshop_wechatpushsend_his_202607.o_espm_bs_eshop_wechatpushsend_his_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 9) {
println("[ID: 9]")
try{
   try{ db.createCS("bdp_espm_o_espm_pm_serial_syn_his_202601", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_pm_serial_syn_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_pm_serial_syn_his_202601").createCL("o_espm_pm_serial_syn_his_202601", {ShardingType: "hash", ShardingKey: {"serialno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_pm_serial_syn_his_202601.o_espm_pm_serial_syn_his_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_pm_serial_syn_his").attachCL("bdp_espm_o_espm_pm_serial_syn_his_202601.o_espm_pm_serial_syn_his_202601",  {LowBound: {sendtime: "2026-01-01"}, UpBound: {sendtime: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_pm_serial_syn_his_202601.o_espm_pm_serial_syn_his_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 10) {
println("[ID: 10]")
try{
   try{ db.createCS("bdp_espm_o_espm_pm_serial_syn_his_202607", {Domain: "bdp_espm_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_espm_o_espm_pm_serial_syn_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm_o_espm_pm_serial_syn_his_202607").createCL("o_espm_pm_serial_syn_his_202607", {ShardingType: "hash", ShardingKey: {"serialno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_espm_o_espm_pm_serial_syn_his_202607.o_espm_pm_serial_syn_his_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_espm").getCL("o_espm_pm_serial_syn_his").attachCL("bdp_espm_o_espm_pm_serial_syn_his_202607.o_espm_pm_serial_syn_his_202607",  {LowBound: {sendtime: "2026-07-01"}, UpBound: {sendtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_espm_o_espm_pm_serial_syn_his_202607.o_espm_pm_serial_syn_his_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 11) {
println("[ID: 11]")
try{
   try{ db.createCS("bdp_uaps_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_2026").createCL("o_uaps_upp_t_txn_refund_2026", {ShardingType: "hash", ShardingKey: {"txn_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_2026.o_uaps_upp_t_txn_refund_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_upp_t_txn_refund").attachCL("bdp_uaps_2026.o_uaps_upp_t_txn_refund_2026",  {LowBound: {txn_date: "20260101"}, UpBound: {txn_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_2026.o_uaps_upp_t_txn_refund_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 12) {
println("[ID: 12]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260101", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260101",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20260105"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 13) {
println("[ID: 13]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260105", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260105, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260105",  {LowBound: {jiaoyirq: "20260105"}, UpBound: {jiaoyirq: "20260110"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260105, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 14) {
println("[ID: 14]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260110", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260110, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260110",  {LowBound: {jiaoyirq: "20260110"}, UpBound: {jiaoyirq: "20260115"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260110, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 15) {
println("[ID: 15]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260115", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260115, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260115",  {LowBound: {jiaoyirq: "20260115"}, UpBound: {jiaoyirq: "20260120"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260115, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 16) {
println("[ID: 16]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260120", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260120, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260120",  {LowBound: {jiaoyirq: "20260120"}, UpBound: {jiaoyirq: "20260125"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260120, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 17) {
println("[ID: 17]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260125", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260125, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260125",  {LowBound: {jiaoyirq: "20260125"}, UpBound: {jiaoyirq: "20260201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260101.f_sdb_pcrpt_hsz_nbzdzd_20260125, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 18) {
println("[ID: 18]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260201", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260201",  {LowBound: {jiaoyirq: "20260201"}, UpBound: {jiaoyirq: "20260205"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 19) {
println("[ID: 19]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260205", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260205, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260205",  {LowBound: {jiaoyirq: "20260205"}, UpBound: {jiaoyirq: "20260210"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260205, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 20) {
println("[ID: 20]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260210", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260210, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260210",  {LowBound: {jiaoyirq: "20260210"}, UpBound: {jiaoyirq: "20260215"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260210, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 21) {
println("[ID: 21]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260215", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260215, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260215",  {LowBound: {jiaoyirq: "20260215"}, UpBound: {jiaoyirq: "20260220"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260215, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 22) {
println("[ID: 22]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260220", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260220, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260220",  {LowBound: {jiaoyirq: "20260220"}, UpBound: {jiaoyirq: "20260225"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260220, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 23) {
println("[ID: 23]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260225", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260225, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260225",  {LowBound: {jiaoyirq: "20260225"}, UpBound: {jiaoyirq: "20260301"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260201.f_sdb_pcrpt_hsz_nbzdzd_20260225, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 24) {
println("[ID: 24]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260301", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260301",  {LowBound: {jiaoyirq: "20260301"}, UpBound: {jiaoyirq: "20260305"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 25) {
println("[ID: 25]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260305", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260305, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260305",  {LowBound: {jiaoyirq: "20260305"}, UpBound: {jiaoyirq: "20260310"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260305, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 26) {
println("[ID: 26]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260310", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260310, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260310",  {LowBound: {jiaoyirq: "20260310"}, UpBound: {jiaoyirq: "20260315"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260310, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 27) {
println("[ID: 27]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260315", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260315, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260315",  {LowBound: {jiaoyirq: "20260315"}, UpBound: {jiaoyirq: "20260320"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260315, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 28) {
println("[ID: 28]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260320", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260320, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260320",  {LowBound: {jiaoyirq: "20260320"}, UpBound: {jiaoyirq: "20260325"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260320, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 29) {
println("[ID: 29]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260325", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260325, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260325",  {LowBound: {jiaoyirq: "20260325"}, UpBound: {jiaoyirq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260301.f_sdb_pcrpt_hsz_nbzdzd_20260325, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 30) {
println("[ID: 30]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260401", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260401",  {LowBound: {jiaoyirq: "20260401"}, UpBound: {jiaoyirq: "20260405"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 31) {
println("[ID: 31]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260405", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260405, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260405",  {LowBound: {jiaoyirq: "20260405"}, UpBound: {jiaoyirq: "20260410"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260405, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 32) {
println("[ID: 32]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260410", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260410, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260410",  {LowBound: {jiaoyirq: "20260410"}, UpBound: {jiaoyirq: "20260415"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260410, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 33) {
println("[ID: 33]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260415", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260415, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260415",  {LowBound: {jiaoyirq: "20260415"}, UpBound: {jiaoyirq: "20260420"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260415, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 34) {
println("[ID: 34]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260420", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260420, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260420",  {LowBound: {jiaoyirq: "20260420"}, UpBound: {jiaoyirq: "20260425"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260420, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 35) {
println("[ID: 35]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260425", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260425, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260425",  {LowBound: {jiaoyirq: "20260425"}, UpBound: {jiaoyirq: "20260501"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260401.f_sdb_pcrpt_hsz_nbzdzd_20260425, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 36) {
println("[ID: 36]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260501", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260501",  {LowBound: {jiaoyirq: "20260501"}, UpBound: {jiaoyirq: "20260505"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 37) {
println("[ID: 37]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260505", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260505, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260505",  {LowBound: {jiaoyirq: "20260505"}, UpBound: {jiaoyirq: "20260510"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260505, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 38) {
println("[ID: 38]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260510", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260510, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260510",  {LowBound: {jiaoyirq: "20260510"}, UpBound: {jiaoyirq: "20260515"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260510, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 39) {
println("[ID: 39]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260515", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260515, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260515",  {LowBound: {jiaoyirq: "20260515"}, UpBound: {jiaoyirq: "20260520"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260515, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 40) {
println("[ID: 40]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260520", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260520, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260520",  {LowBound: {jiaoyirq: "20260520"}, UpBound: {jiaoyirq: "20260525"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260520, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 41) {
println("[ID: 41]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260525", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260525, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260525",  {LowBound: {jiaoyirq: "20260525"}, UpBound: {jiaoyirq: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260501.f_sdb_pcrpt_hsz_nbzdzd_20260525, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 42) {
println("[ID: 42]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260601", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260601",  {LowBound: {jiaoyirq: "20260601"}, UpBound: {jiaoyirq: "20260605"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 43) {
println("[ID: 43]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260605", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260605, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260605",  {LowBound: {jiaoyirq: "20260605"}, UpBound: {jiaoyirq: "20260610"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260605, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 44) {
println("[ID: 44]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260610", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260610",  {LowBound: {jiaoyirq: "20260610"}, UpBound: {jiaoyirq: "20260615"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 45) {
println("[ID: 45]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260615", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260615, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260615",  {LowBound: {jiaoyirq: "20260615"}, UpBound: {jiaoyirq: "20260620"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260615, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 46) {
println("[ID: 46]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260620", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260620, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260620",  {LowBound: {jiaoyirq: "20260620"}, UpBound: {jiaoyirq: "20260625"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260620, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 47) {
println("[ID: 47]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260625", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260625, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260625",  {LowBound: {jiaoyirq: "20260625"}, UpBound: {jiaoyirq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260601.f_sdb_pcrpt_hsz_nbzdzd_20260625, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 48) {
println("[ID: 48]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260701", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260701",  {LowBound: {jiaoyirq: "20260701"}, UpBound: {jiaoyirq: "20260705"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 49) {
println("[ID: 49]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260705", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260705, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260705",  {LowBound: {jiaoyirq: "20260705"}, UpBound: {jiaoyirq: "20260710"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260705, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 50) {
println("[ID: 50]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260710", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260710, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260710",  {LowBound: {jiaoyirq: "20260710"}, UpBound: {jiaoyirq: "20260715"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260710, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 51) {
println("[ID: 51]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260715", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260715, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260715",  {LowBound: {jiaoyirq: "20260715"}, UpBound: {jiaoyirq: "20260720"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260715, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 52) {
println("[ID: 52]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260720", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260720, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260720",  {LowBound: {jiaoyirq: "20260720"}, UpBound: {jiaoyirq: "20260725"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260720, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 53) {
println("[ID: 53]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260725", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260725, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260725",  {LowBound: {jiaoyirq: "20260725"}, UpBound: {jiaoyirq: "20260801"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260701.f_sdb_pcrpt_hsz_nbzdzd_20260725, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 54) {
println("[ID: 54]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260801", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260801",  {LowBound: {jiaoyirq: "20260801"}, UpBound: {jiaoyirq: "20260805"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 55) {
println("[ID: 55]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260805", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260805, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260805",  {LowBound: {jiaoyirq: "20260805"}, UpBound: {jiaoyirq: "20260810"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260805, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 56) {
println("[ID: 56]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260810", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260810, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260810",  {LowBound: {jiaoyirq: "20260810"}, UpBound: {jiaoyirq: "20260815"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260810, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 57) {
println("[ID: 57]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260815", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260815, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260815",  {LowBound: {jiaoyirq: "20260815"}, UpBound: {jiaoyirq: "20260820"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260815, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 58) {
println("[ID: 58]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260820", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260820, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260820",  {LowBound: {jiaoyirq: "20260820"}, UpBound: {jiaoyirq: "20260825"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260820, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 59) {
println("[ID: 59]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260825", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260825, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260825",  {LowBound: {jiaoyirq: "20260825"}, UpBound: {jiaoyirq: "20260901"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260801.f_sdb_pcrpt_hsz_nbzdzd_20260825, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 60) {
println("[ID: 60]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260901", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260901",  {LowBound: {jiaoyirq: "20260901"}, UpBound: {jiaoyirq: "20260905"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 61) {
println("[ID: 61]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260905", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260905, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260905",  {LowBound: {jiaoyirq: "20260905"}, UpBound: {jiaoyirq: "20260910"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260905, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 62) {
println("[ID: 62]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260910", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260910, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260910",  {LowBound: {jiaoyirq: "20260910"}, UpBound: {jiaoyirq: "20260915"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260910, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 63) {
println("[ID: 63]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260915", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260915, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260915",  {LowBound: {jiaoyirq: "20260915"}, UpBound: {jiaoyirq: "20260920"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260915, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 64) {
println("[ID: 64]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260920", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260920, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260920",  {LowBound: {jiaoyirq: "20260920"}, UpBound: {jiaoyirq: "20260925"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260920, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 65) {
println("[ID: 65]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901").createCL("f_sdb_pcrpt_hsz_nbzdzd_20260925", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260925, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260925",  {LowBound: {jiaoyirq: "20260925"}, UpBound: {jiaoyirq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20260901.f_sdb_pcrpt_hsz_nbzdzd_20260925, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 66) {
println("[ID: 66]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261001", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261001",  {LowBound: {jiaoyirq: "20261001"}, UpBound: {jiaoyirq: "20261005"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 67) {
println("[ID: 67]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261005", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261005, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261005",  {LowBound: {jiaoyirq: "20261005"}, UpBound: {jiaoyirq: "20261010"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261005, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 68) {
println("[ID: 68]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261010", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261010, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261010",  {LowBound: {jiaoyirq: "20261010"}, UpBound: {jiaoyirq: "20261015"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261010, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 69) {
println("[ID: 69]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261015", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261015, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261015",  {LowBound: {jiaoyirq: "20261015"}, UpBound: {jiaoyirq: "20261020"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261015, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 70) {
println("[ID: 70]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261020", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261020, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261020",  {LowBound: {jiaoyirq: "20261020"}, UpBound: {jiaoyirq: "20261025"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261020, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 71) {
println("[ID: 71]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261025", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261025, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261025",  {LowBound: {jiaoyirq: "20261025"}, UpBound: {jiaoyirq: "20261101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261001.f_sdb_pcrpt_hsz_nbzdzd_20261025, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 72) {
println("[ID: 72]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261101", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261101",  {LowBound: {jiaoyirq: "20261101"}, UpBound: {jiaoyirq: "20261105"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 73) {
println("[ID: 73]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261105", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261105, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261105",  {LowBound: {jiaoyirq: "20261105"}, UpBound: {jiaoyirq: "20261110"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261105, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 74) {
println("[ID: 74]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261110", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261110, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261110",  {LowBound: {jiaoyirq: "20261110"}, UpBound: {jiaoyirq: "20261115"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261110, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 75) {
println("[ID: 75]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261115", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261115, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261115",  {LowBound: {jiaoyirq: "20261115"}, UpBound: {jiaoyirq: "20261120"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261115, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 76) {
println("[ID: 76]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261120", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261120, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261120",  {LowBound: {jiaoyirq: "20261120"}, UpBound: {jiaoyirq: "20261125"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261120, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 77) {
println("[ID: 77]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261125", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261125, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261125",  {LowBound: {jiaoyirq: "20261125"}, UpBound: {jiaoyirq: "20261201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261101.f_sdb_pcrpt_hsz_nbzdzd_20261125, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 78) {
println("[ID: 78]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261201", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261201",  {LowBound: {jiaoyirq: "20261201"}, UpBound: {jiaoyirq: "20261205"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 79) {
println("[ID: 79]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261205", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261205, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261205",  {LowBound: {jiaoyirq: "20261205"}, UpBound: {jiaoyirq: "20261210"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261205, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 80) {
println("[ID: 80]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261210", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261210, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261210",  {LowBound: {jiaoyirq: "20261210"}, UpBound: {jiaoyirq: "20261215"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261210, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 81) {
println("[ID: 81]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261215", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261215, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261215",  {LowBound: {jiaoyirq: "20261215"}, UpBound: {jiaoyirq: "20261220"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261215, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 82) {
println("[ID: 82]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261220", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261220, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261220",  {LowBound: {jiaoyirq: "20261220"}, UpBound: {jiaoyirq: "20261225"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261220, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 83) {
println("[ID: 83]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201").createCL("f_sdb_pcrpt_hsz_nbzdzd_20261225", {ShardingType: "hash", ShardingKey: {"guiylius":1,"shijchuo":1,"zhanghao":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261225, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzdzd").attachCL("bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261225",  {LowBound: {jiaoyirq: "20261225"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzdzd_20261201.f_sdb_pcrpt_hsz_nbzdzd_20261225, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 84) {
println("[ID: 84]")
try{
   try{ db.createCS("bdp_npc_o_npc_cs_accountentryrecord_2027", {Domain: "bdp_npc_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_npc_o_npc_cs_accountentryrecord_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_npc_o_npc_cs_accountentryrecord_2027").createCL("o_npc_cs_accountentryrecord_2027", {ShardingType: "hash", ShardingKey: {"row_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_npc_o_npc_cs_accountentryrecord_2027.o_npc_cs_accountentryrecord_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_npc").getCL("o_npc_cs_accountentryrecord").attachCL("bdp_npc_o_npc_cs_accountentryrecord_2027.o_npc_cs_accountentryrecord_2027",  {LowBound: {create_date: "2026/01/01"}, UpBound: {create_date: "2027/01/01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_npc_o_npc_cs_accountentryrecord_2027.o_npc_cs_accountentryrecord_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 85) {
println("[ID: 85]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026").createCL("f_sdb_ltts_ktab_cfhqmx_solr_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026.f_sdb_ltts_ktab_cfhqmx_solr_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_ktab_cfhqmx_solr").attachCL("bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026.f_sdb_ltts_ktab_cfhqmx_solr_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_ktab_cfhqmx_solr_2026.f_sdb_ltts_ktab_cfhqmx_solr_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 86) {
println("[ID: 86]")
try{
   try{ db.createCS("bdp_f_sdb_hpls_ismp_image_log_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_hpls_ismp_image_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_hpls_ismp_image_log_2026").createCL("f_sdb_hpls_ismp_image_log_2026", {ShardingType: "hash", ShardingKey: {"batch_id":1,"file_name":1,"row_num":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_hpls_ismp_image_log_2026.f_sdb_hpls_ismp_image_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_hpls_ismp_image_log").attachCL("bdp_f_sdb_hpls_ismp_image_log_2026.f_sdb_hpls_ismp_image_log_2026",  {LowBound: {call_dt: "20260101"}, UpBound: {call_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_hpls_ismp_image_log_2026.f_sdb_hpls_ismp_image_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 87) {
println("[ID: 87]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_jn_access_list_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_jn_access_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_jn_access_list_2026").createCL("f_sdb_eqz_jn_access_list_2026", {ShardingType: "hash", ShardingKey: {"seqno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_jn_access_list_2026.f_sdb_eqz_jn_access_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_jn_access_list").attachCL("bdp_f_sdb_eqz_jn_access_list_2026.f_sdb_eqz_jn_access_list_2026",  {LowBound: {create_date: "20260101"}, UpBound: {create_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_jn_access_list_2026.f_sdb_eqz_jn_access_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 88) {
println("[ID: 88]")
try{
   try{ db.createCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601").createCL("f_sdb_icop_epcc_epcc_tranlog_info_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601.f_sdb_icop_epcc_epcc_tranlog_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_epcc_epcc_tranlog_info").attachCL("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601.f_sdb_icop_epcc_epcc_tranlog_info_202601",  {LowBound: {createtime: "2026-01-01"}, UpBound: {createtime: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202601.f_sdb_icop_epcc_epcc_tranlog_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 89) {
println("[ID: 89]")
try{
   try{ db.createCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604").createCL("f_sdb_icop_epcc_epcc_tranlog_info_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604.f_sdb_icop_epcc_epcc_tranlog_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_epcc_epcc_tranlog_info").attachCL("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604.f_sdb_icop_epcc_epcc_tranlog_info_202604",  {LowBound: {createtime: "2026-04-01"}, UpBound: {createtime: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202604.f_sdb_icop_epcc_epcc_tranlog_info_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 90) {
println("[ID: 90]")
try{
   try{ db.createCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607").createCL("f_sdb_icop_epcc_epcc_tranlog_info_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607.f_sdb_icop_epcc_epcc_tranlog_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_epcc_epcc_tranlog_info").attachCL("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607.f_sdb_icop_epcc_epcc_tranlog_info_202607",  {LowBound: {createtime: "2026-07-01"}, UpBound: {createtime: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202607.f_sdb_icop_epcc_epcc_tranlog_info_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 91) {
println("[ID: 91]")
try{
   try{ db.createCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610").createCL("f_sdb_icop_epcc_epcc_tranlog_info_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610.f_sdb_icop_epcc_epcc_tranlog_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_epcc_epcc_tranlog_info").attachCL("bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610.f_sdb_icop_epcc_epcc_tranlog_info_202610",  {LowBound: {createtime: "2026-10-01"}, UpBound: {createtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_epcc_epcc_tranlog_info_202610.f_sdb_icop_epcc_epcc_tranlog_info_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 92) {
println("[ID: 92]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_first_login_time_2026", {ShardingType: "hash", ShardingKey: {"cust_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_first_login_time_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_first_login_time").attachCL("bdp_2026.f_sdb_icop_first_login_time_2026",  {LowBound: {first_login_time: "2026-01-01"}, UpBound: {first_login_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_first_login_time_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 93) {
println("[ID: 93]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_tran_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_tran_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tran_sum").attachCL("bdp_2026.f_sdb_icop_tran_sum_2026",  {LowBound: {bizdate: "20260101"}, UpBound: {bizdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_tran_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 94) {
println("[ID: 94]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_ware_biz_info_custid_2026", {ShardingType: "hash", ShardingKey: {"orderid":1,"custid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_ware_biz_info_custid_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_custid").attachCL("bdp_2026.f_sdb_icop_ware_biz_info_custid_2026",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_ware_biz_info_custid_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 95) {
println("[ID: 95]")
try{
   try{ db.createCS("bdp_f_sdb_ecps_points_trans_detail_his_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ecps_points_trans_detail_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ecps_points_trans_detail_his_2026").createCL("f_sdb_ecps_points_trans_detail_his_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ecps_points_trans_detail_his_2026.f_sdb_ecps_points_trans_detail_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ecps_points_trans_detail_his").attachCL("bdp_f_sdb_ecps_points_trans_detail_his_2026.f_sdb_ecps_points_trans_detail_his_2026",  {LowBound: {orderdate: "20260101"}, UpBound: {orderdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ecps_points_trans_detail_his_2026.f_sdb_ecps_points_trans_detail_his_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 96) {
println("[ID: 96]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_zczq_tran_list_2026", {ShardingType: "hash", ShardingKey: {"guiylius":1,"zhanghao":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_zczq_tran_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_zczq_tran_list").attachCL("bdp_2026.f_sdb_mpaas_zczq_tran_list_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_zczq_tran_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 97) {
println("[ID: 97]")
try{
   try{ db.createCS("bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601").createCL("f_sdb_icop_epcc_epcc_tranacct_serial_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601.f_sdb_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_epcc_epcc_tranacct_serial").attachCL("bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601.f_sdb_icop_epcc_epcc_tranacct_serial_202601",  {LowBound: {trandate: "20260101"}, UpBound: {trandate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_epcc_epcc_tranacct_serial_202601.f_sdb_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 98) {
println("[ID: 98]")
try{
   try{ db.createCS("bdp_uaps_o_uaps_t_txn_seac_settle_2026", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_o_uaps_t_txn_seac_settle_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_o_uaps_t_txn_seac_settle_2026").createCL("o_uaps_t_txn_seac_settle_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_o_uaps_t_txn_seac_settle_2026.o_uaps_t_txn_seac_settle_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_t_txn_seac_settle").attachCL("bdp_uaps_o_uaps_t_txn_seac_settle_2026.o_uaps_t_txn_seac_settle_2026",  {LowBound: {zwrq: "20260101"}, UpBound: {zwrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_o_uaps_t_txn_seac_settle_2026.o_uaps_t_txn_seac_settle_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 99) {
println("[ID: 99]")
try{
   try{ db.createCS("bdp_f_sdb_icop_dbank_cust_audit_info_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_dbank_cust_audit_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_dbank_cust_audit_info_2026").createCL("f_sdb_icop_dbank_cust_audit_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_dbank_cust_audit_info_2026.f_sdb_icop_dbank_cust_audit_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_dbank_cust_audit_info").attachCL("bdp_f_sdb_icop_dbank_cust_audit_info_2026.f_sdb_icop_dbank_cust_audit_info_2026",  {LowBound: {create_date: "2026-01-01"}, UpBound: {create_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_dbank_cust_audit_info_2026.f_sdb_icop_dbank_cust_audit_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 100) {
println("[ID: 100]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_zntzck_inc_his_2026", {ShardingType: "hash", ShardingKey: {"zhanghao":1,"kehuzhao":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_zntzck_inc_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_zntzck_inc_his").attachCL("bdp_2026.f_sdb_mpaas_zntzck_inc_his_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_zntzck_inc_his_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 101) {
println("[ID: 101]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_zntzck_tran_list_2026", {ShardingType: "hash", ShardingKey: {"guiylius":1,"zhanghao":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_zntzck_tran_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_zntzck_tran_list").attachCL("bdp_2026.f_sdb_mpaas_zntzck_tran_list_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_zntzck_tran_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 102) {
println("[ID: 102]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_pfb_acct_info_2026", {ShardingType: "hash", ShardingKey: {"acctno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_pfb_acct_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pfb_acct_info_20250108bak").attachCL("bdp_2026.f_sdb_pfb_acct_info_2026",  {LowBound: {opendt: "20260101"}, UpBound: {opendt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_pfb_acct_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 103) {
println("[ID: 103]")
try{
   try{ db.createCS("bdp_ylk_o_ylk_coma_2026", {Domain: "bdp_ylk_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ylk_o_ylk_coma_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk_o_ylk_coma_2026").createCL("o_ylk_coma_2026", {ShardingType: "hash", ShardingKey: {"sdb_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ylk_o_ylk_coma_2026.o_ylk_coma_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk").getCL("o_ylk_coma").attachCL("bdp_ylk_o_ylk_coma_2026.o_ylk_coma_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ylk_o_ylk_coma_2026.o_ylk_coma_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 104) {
println("[ID: 104]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_hpls_acc_loan_flow_2026", {ShardingType: "hash", ShardingKey: {"serno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_hpls_acc_loan_flow_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_hpls_acc_loan_flow").attachCL("bdp_2026.f_sdb_hpls_acc_loan_flow_2026",  {LowBound: {start_date: "20260101"}, UpBound: {start_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_hpls_acc_loan_flow_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 105) {
println("[ID: 105]")
try{
   try{ db.createCS("bdp_f_sdb_icop_bal_detail_20260101", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_bal_detail_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_bal_detail_20260101").createCL("f_sdb_icop_bal_detail_20260101", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_bal_detail_20260101.f_sdb_icop_bal_detail_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_bal_detail").attachCL("bdp_f_sdb_icop_bal_detail_20260101.f_sdb_icop_bal_detail_20260101",  {LowBound: {settle_date: "20260101"}, UpBound: {settle_date: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_bal_detail_20260101.f_sdb_icop_bal_detail_20260101, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 106) {
println("[ID: 106]")
try{
   try{ db.createCS("bdp_f_sdb_icop_bal_detail_20260401", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_bal_detail_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_bal_detail_20260401").createCL("f_sdb_icop_bal_detail_20260401", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_bal_detail_20260401.f_sdb_icop_bal_detail_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_bal_detail").attachCL("bdp_f_sdb_icop_bal_detail_20260401.f_sdb_icop_bal_detail_20260401",  {LowBound: {settle_date: "20260401"}, UpBound: {settle_date: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_bal_detail_20260401.f_sdb_icop_bal_detail_20260401, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 107) {
println("[ID: 107]")
try{
   try{ db.createCS("bdp_f_sdb_icop_bal_detail_20260701", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_bal_detail_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_bal_detail_20260701").createCL("f_sdb_icop_bal_detail_20260701", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_bal_detail_20260701.f_sdb_icop_bal_detail_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_bal_detail").attachCL("bdp_f_sdb_icop_bal_detail_20260701.f_sdb_icop_bal_detail_20260701",  {LowBound: {settle_date: "20260701"}, UpBound: {settle_date: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_bal_detail_20260701.f_sdb_icop_bal_detail_20260701, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 108) {
println("[ID: 108]")
try{
   try{ db.createCS("bdp_f_sdb_icop_bal_detail_20261001", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_bal_detail_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_bal_detail_20261001").createCL("f_sdb_icop_bal_detail_20261001", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"order_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_bal_detail_20261001.f_sdb_icop_bal_detail_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_bal_detail").attachCL("bdp_f_sdb_icop_bal_detail_20261001.f_sdb_icop_bal_detail_20261001",  {LowBound: {settle_date: "20261001"}, UpBound: {settle_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_bal_detail_20261001.f_sdb_icop_bal_detail_20261001, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 109) {
println("[ID: 109]")
try{
   try{ db.createCS("bdp_posp_2026", {Domain: "bdp_posp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_posp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_posp_2026").createCL("o_posp_translog_h5_2026", {ShardingType: "hash", ShardingKey: {"mchtid":1,"outorderid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_posp_2026.o_posp_translog_h5_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_posp").getCL("o_posp_translog_h5").attachCL("bdp_posp_2026.o_posp_translog_h5_2026",  {LowBound: {sys_date: "20260101"}, UpBound: {sys_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_posp_2026.o_posp_translog_h5_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 110) {
println("[ID: 110]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_zh_lsmx_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_zh_lsmx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_zh_lsmx_202601").createCL("f_sdb_ltts_zh_lsmx_202601", {ShardingType: "hash", ShardingKey: {"mxixuhao":1,"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_zh_lsmx_202601.f_sdb_ltts_zh_lsmx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_zh_lsmx").attachCL("bdp_f_sdb_ltts_zh_lsmx_202601.f_sdb_ltts_zh_lsmx_202601",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_zh_lsmx_202601.f_sdb_ltts_zh_lsmx_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 111) {
println("[ID: 111]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_zh_lsmx_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_zh_lsmx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_zh_lsmx_202604").createCL("f_sdb_ltts_zh_lsmx_202604", {ShardingType: "hash", ShardingKey: {"mxixuhao":1,"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_zh_lsmx_202604.f_sdb_ltts_zh_lsmx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_zh_lsmx").attachCL("bdp_f_sdb_ltts_zh_lsmx_202604.f_sdb_ltts_zh_lsmx_202604",  {LowBound: {jiaoyirq: "20260401"}, UpBound: {jiaoyirq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_zh_lsmx_202604.f_sdb_ltts_zh_lsmx_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 112) {
println("[ID: 112]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_zh_lsmx_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_zh_lsmx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_zh_lsmx_202607").createCL("f_sdb_ltts_zh_lsmx_202607", {ShardingType: "hash", ShardingKey: {"mxixuhao":1,"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_zh_lsmx_202607.f_sdb_ltts_zh_lsmx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_zh_lsmx").attachCL("bdp_f_sdb_ltts_zh_lsmx_202607.f_sdb_ltts_zh_lsmx_202607",  {LowBound: {jiaoyirq: "20260701"}, UpBound: {jiaoyirq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_zh_lsmx_202607.f_sdb_ltts_zh_lsmx_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 113) {
println("[ID: 113]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_zh_lsmx_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_zh_lsmx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_zh_lsmx_202610").createCL("f_sdb_ltts_zh_lsmx_202610", {ShardingType: "hash", ShardingKey: {"mxixuhao":1,"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_zh_lsmx_202610.f_sdb_ltts_zh_lsmx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_zh_lsmx").attachCL("bdp_f_sdb_ltts_zh_lsmx_202610.f_sdb_ltts_zh_lsmx_202610",  {LowBound: {jiaoyirq: "20261001"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_zh_lsmx_202610.f_sdb_ltts_zh_lsmx_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 114) {
println("[ID: 114]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_zczq_inc_his_2026", {ShardingType: "hash", ShardingKey: {"zhanghao":1,"kehuzhao":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_zczq_inc_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_zczq_inc_his").attachCL("bdp_2026.f_sdb_mpaas_zczq_inc_his_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_zczq_inc_his_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 115) {
println("[ID: 115]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_hpls_lm_setlmt_log_2026", {ShardingType: "hash", ShardingKey: {"tx_no":1,"ln_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_hpls_lm_setlmt_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_hpls_lm_setlmt_log").attachCL("bdp_2026.f_sdb_hpls_lm_setlmt_log_2026",  {LowBound: {val_dt: "20260101"}, UpBound: {val_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_hpls_lm_setlmt_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 116) {
println("[ID: 116]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_ussp_dkmx_list_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_ussp_dkmx_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_dkmx_list").attachCL("bdp_2026.f_sdb_ussp_dkmx_list_2026",  {LowBound: {tx_val_dt: "20260101"}, UpBound: {tx_val_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_ussp_dkmx_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 117) {
println("[ID: 117]")
try{
   try{ db.createCS("bdp_icop_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_2026").createCL("o_icop_dbank_pcm_cust_trans_record_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_2026.o_icop_dbank_pcm_cust_trans_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_dbank_pcm_cust_trans_record").attachCL("bdp_icop_2026.o_icop_dbank_pcm_cust_trans_record_2026",  {LowBound: {created_date: "2026-01-01"}, UpBound: {created_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_2026.o_icop_dbank_pcm_cust_trans_record_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 118) {
println("[ID: 118]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_ltts_zh_info_2026", {ShardingType: "hash", ShardingKey: {"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_ltts_zh_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_zh_info").attachCL("bdp_2026.f_sdb_ltts_zh_info_2026",  {LowBound: {kaihriqi: "20260101"}, UpBound: {kaihriqi: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_ltts_zh_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 119) {
println("[ID: 119]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_jgxck_tran_list_2026", {ShardingType: "hash", ShardingKey: {"zhengjhm":1,"zhengjlx":1,"liushuih":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_jgxck_tran_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_jgxck_tran_list").attachCL("bdp_2026.f_sdb_mpaas_jgxck_tran_list_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_jgxck_tran_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 120) {
println("[ID: 120]")
try{
   try{ db.createCS("bdp_f_sdb_bpt_bplat_plmx_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_bpt_bplat_plmx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_bpt_bplat_plmx_202601").createCL("f_sdb_bpt_bplat_plmx_202601", {ShardingType: "hash", ShardingKey: {"dataid":1,"pt_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_bpt_bplat_plmx_202601.f_sdb_bpt_bplat_plmx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_bplat_plmx").attachCL("bdp_f_sdb_bpt_bplat_plmx_202601.f_sdb_bpt_bplat_plmx_202601",  {LowBound: {zwrq: "20260101"}, UpBound: {zwrq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_bpt_bplat_plmx_202601.f_sdb_bpt_bplat_plmx_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 121) {
println("[ID: 121]")
try{
   try{ db.createCS("bdp_f_sdb_bpt_bplat_plmx_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_bpt_bplat_plmx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_bpt_bplat_plmx_202604").createCL("f_sdb_bpt_bplat_plmx_202604", {ShardingType: "hash", ShardingKey: {"dataid":1,"pt_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_bpt_bplat_plmx_202604.f_sdb_bpt_bplat_plmx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_bplat_plmx").attachCL("bdp_f_sdb_bpt_bplat_plmx_202604.f_sdb_bpt_bplat_plmx_202604",  {LowBound: {zwrq: "20260401"}, UpBound: {zwrq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_bpt_bplat_plmx_202604.f_sdb_bpt_bplat_plmx_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 122) {
println("[ID: 122]")
try{
   try{ db.createCS("bdp_f_sdb_bpt_bplat_plmx_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_bpt_bplat_plmx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_bpt_bplat_plmx_202607").createCL("f_sdb_bpt_bplat_plmx_202607", {ShardingType: "hash", ShardingKey: {"dataid":1,"pt_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_bpt_bplat_plmx_202607.f_sdb_bpt_bplat_plmx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_bplat_plmx").attachCL("bdp_f_sdb_bpt_bplat_plmx_202607.f_sdb_bpt_bplat_plmx_202607",  {LowBound: {zwrq: "20260701"}, UpBound: {zwrq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_bpt_bplat_plmx_202607.f_sdb_bpt_bplat_plmx_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 123) {
println("[ID: 123]")
try{
   try{ db.createCS("bdp_f_sdb_bpt_bplat_plmx_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_bpt_bplat_plmx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_bpt_bplat_plmx_202610").createCL("f_sdb_bpt_bplat_plmx_202610", {ShardingType: "hash", ShardingKey: {"dataid":1,"pt_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_bpt_bplat_plmx_202610.f_sdb_bpt_bplat_plmx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_bplat_plmx").attachCL("bdp_f_sdb_bpt_bplat_plmx_202610.f_sdb_bpt_bplat_plmx_202610",  {LowBound: {zwrq: "20261001"}, UpBound: {zwrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_bpt_bplat_plmx_202610.f_sdb_bpt_bplat_plmx_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 124) {
println("[ID: 124]")
try{
   try{ db.createCS("bdp_f_sdb_05_cbk_acct_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_05_cbk_acct_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_05_cbk_acct_202601").createCL("f_sdb_05_cbk_acct_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_05_cbk_acct_202601.f_sdb_05_cbk_acct_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_05_cbk_acct").attachCL("bdp_f_sdb_05_cbk_acct_202601.f_sdb_05_cbk_acct_202601",  {LowBound: {trandt: "2026-01-01"}, UpBound: {trandt: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_05_cbk_acct_202601.f_sdb_05_cbk_acct_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 125) {
println("[ID: 125]")
try{
   try{ db.createCS("bdp_f_sdb_05_cbk_acct_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_05_cbk_acct_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_05_cbk_acct_202604").createCL("f_sdb_05_cbk_acct_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_05_cbk_acct_202604.f_sdb_05_cbk_acct_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_05_cbk_acct").attachCL("bdp_f_sdb_05_cbk_acct_202604.f_sdb_05_cbk_acct_202604",  {LowBound: {trandt: "2026-04-01"}, UpBound: {trandt: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_05_cbk_acct_202604.f_sdb_05_cbk_acct_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 126) {
println("[ID: 126]")
try{
   try{ db.createCS("bdp_f_sdb_05_cbk_acct_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_05_cbk_acct_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_05_cbk_acct_202607").createCL("f_sdb_05_cbk_acct_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_05_cbk_acct_202607.f_sdb_05_cbk_acct_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_05_cbk_acct").attachCL("bdp_f_sdb_05_cbk_acct_202607.f_sdb_05_cbk_acct_202607",  {LowBound: {trandt: "2026-07-01"}, UpBound: {trandt: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_05_cbk_acct_202607.f_sdb_05_cbk_acct_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 127) {
println("[ID: 127]")
try{
   try{ db.createCS("bdp_f_sdb_05_cbk_acct_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_05_cbk_acct_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_05_cbk_acct_202610").createCL("f_sdb_05_cbk_acct_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_05_cbk_acct_202610.f_sdb_05_cbk_acct_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_05_cbk_acct").attachCL("bdp_f_sdb_05_cbk_acct_202610.f_sdb_05_cbk_acct_202610",  {LowBound: {trandt: "2026-10-01"}, UpBound: {trandt: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_05_cbk_acct_202610.f_sdb_05_cbk_acct_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 128) {
println("[ID: 128]")
try{
   try{ db.createCS("bdp_icop_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_2026").createCL("o_icop_icoplog_sms_record_log_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_2026.o_icop_icoplog_sms_record_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_icoplog_sms_record_log").attachCL("bdp_icop_2026.o_icop_icoplog_sms_record_log_2026",  {LowBound: {created_date: "2026-01-01"}, UpBound: {created_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_2026.o_icop_icoplog_sms_record_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 129) {
println("[ID: 129]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_icop_biz_transfer_no_2028", {ShardingType: "hash", ShardingKey: {"trans_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_icop_biz_transfer_no_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_biz_transfer_no").attachCL("bdp_2028.f_sdb_icop_biz_transfer_no_2028",  {LowBound: {trans_date: "2026-01-01"}, UpBound: {trans_date: "2028-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_icop_biz_transfer_no_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 130) {
println("[ID: 130]")
try{
   try{ db.createCS("bdp_icop_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_2026").createCL("o_icop_crtcd_trans_record_2026", {ShardingType: "hash", ShardingKey: {"icop_seq_id":1,"trans_time":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_2026.o_icop_crtcd_trans_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_crtcd_trans_record").attachCL("bdp_icop_2026.o_icop_crtcd_trans_record_2026",  {LowBound: {trans_date: "20260101"}, UpBound: {trans_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_2026.o_icop_crtcd_trans_record_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 131) {
println("[ID: 131]")
try{
   try{ db.createCS("bdp_uaps_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_2026").createCL("o_uaps_b_fund_trans_info_2026", {ShardingType: "hash", ShardingKey: {"scene_id":1,"business_seq_no":1,"platform":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_2026.o_uaps_b_fund_trans_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_b_fund_trans_info").attachCL("bdp_uaps_2026.o_uaps_b_fund_trans_info_2026",  {LowBound: {local_date: "20260101"}, UpBound: {local_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_2026.o_uaps_b_fund_trans_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 132) {
println("[ID: 132]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_decd_inc_his_2026", {ShardingType: "hash", ShardingKey: {"jiaoyils":1,"acct_id":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_decd_inc_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_decd_inc_his").attachCL("bdp_2026.f_sdb_mpaas_decd_inc_his_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_decd_inc_his_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 133) {
println("[ID: 133]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_eqz_txb_trans_log_2026", {ShardingType: "hash", ShardingKey: {"accountid":1,"transq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_eqz_txb_trans_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_txb_trans_log").attachCL("bdp_2026.f_sdb_eqz_txb_trans_log_2026",  {LowBound: {trandate: "20260101"}, UpBound: {trandate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_eqz_txb_trans_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 134) {
println("[ID: 134]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_jzxlc_tran_list_2026", {ShardingType: "hash", ShardingKey: {"zhanghao":1,"tran_evt_id":1,"kehuhaoo":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_jzxlc_tran_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_jzxlc_tran_list_20250730bak").attachCL("bdp_2026.f_sdb_mpaas_jzxlc_tran_list_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_jzxlc_tran_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 135) {
println("[ID: 135]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_posp_ylk_coma_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_posp_ylk_coma_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_posp_ylk_coma_sum").attachCL("bdp_2026.f_sdb_posp_ylk_coma_sum_2026",  {LowBound: {month: "20260101"}, UpBound: {month: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_posp_ylk_coma_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 136) {
println("[ID: 136]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_bpt_bplat_runstatus_2026", {ShardingType: "hash", ShardingKey: {"pt_no":1,"businesstype":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_bpt_bplat_runstatus_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_bplat_runstatus").attachCL("bdp_2026.f_sdb_bpt_bplat_runstatus_2026",  {LowBound: {zwrq: "20260101"}, UpBound: {zwrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_bpt_bplat_runstatus_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 137) {
println("[ID: 137]")
try{
   try{ db.createCS("bdp_202601", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_202601").createCL("f_sdb_icop_order_trans_query_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_202601.f_sdb_icop_order_trans_query_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_order_trans_query").attachCL("bdp_202601.f_sdb_icop_order_trans_query_202601",  {LowBound: {paid_dt: "20260101"}, UpBound: {paid_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_202601.f_sdb_icop_order_trans_query_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 138) {
println("[ID: 138]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_mpaas_decd_tran_list_2026", {ShardingType: "hash", ShardingKey: {"acct_id":1,"zhanghao":1,"tran_evt_id":1,"kehuhaoo":1,"jiaoyilx":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_mpaas_decd_tran_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_mpaas_decd_tran_list").attachCL("bdp_2026.f_sdb_mpaas_decd_tran_list_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_mpaas_decd_tran_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 139) {
println("[ID: 139]")
try{
   try{ db.createCS("bdp_cibs_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_2026").createCL("o_cibs_e_tran_batch_detail_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_2026.o_cibs_e_tran_batch_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_tran_batch_detail").attachCL("bdp_cibs_2026.o_cibs_e_tran_batch_detail_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_2026.o_cibs_e_tran_batch_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 140) {
println("[ID: 140]")
try{
   try{ db.createCS("bdp_cibs_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_2026").createCL("o_cibs_e_payroll_batch_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_2026.o_cibs_e_payroll_batch_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_payroll_batch").attachCL("bdp_cibs_2026.o_cibs_e_payroll_batch_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_2026.o_cibs_e_payroll_batch_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 141) {
println("[ID: 141]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_cust_asset_change_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_cust_asset_change_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_cust_asset_change_202601").createCL("f_sdb_ussp_cust_asset_change_202601", {ShardingType: "hash", ShardingKey: {"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_cust_asset_change_202601.f_sdb_ussp_cust_asset_change_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_cust_asset_change").attachCL("bdp_f_sdb_ussp_cust_asset_change_202601.f_sdb_ussp_cust_asset_change_202601",  {LowBound: {load_month: "20260101"}, UpBound: {load_month: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_cust_asset_change_202601.f_sdb_ussp_cust_asset_change_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 142) {
println("[ID: 142]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_cust_asset_change_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_cust_asset_change_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_cust_asset_change_202607").createCL("f_sdb_ussp_cust_asset_change_202607", {ShardingType: "hash", ShardingKey: {"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_cust_asset_change_202607.f_sdb_ussp_cust_asset_change_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_cust_asset_change").attachCL("bdp_f_sdb_ussp_cust_asset_change_202607.f_sdb_ussp_cust_asset_change_202607",  {LowBound: {load_month: "20260701"}, UpBound: {load_month: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_cust_asset_change_202607.f_sdb_ussp_cust_asset_change_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 143) {
println("[ID: 143]")
try{
   try{ db.createCS("bdp_f_sdb_icop_gov_batch_czgz_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_gov_batch_czgz_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_gov_batch_czgz_2026").createCL("f_sdb_icop_gov_batch_czgz_2026", {ShardingType: "hash", ShardingKey: {"data_id":1,"bk_acctno1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_gov_batch_czgz_2026.f_sdb_icop_gov_batch_czgz_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_gov_batch_czgz").attachCL("bdp_f_sdb_icop_gov_batch_czgz_2026.f_sdb_icop_gov_batch_czgz_2026",  {LowBound: {dfrq: "20260101"}, UpBound: {dfrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_gov_batch_czgz_2026.f_sdb_icop_gov_batch_czgz_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 144) {
println("[ID: 144]")
try{
   try{ db.createCS("bdp_f_sdb_icop_cup_trans_log_2028", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_cup_trans_log_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_cup_trans_log_2028").createCL("f_sdb_icop_cup_trans_log_2028", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_cup_trans_log_2028.f_sdb_icop_cup_trans_log_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_cup_trans_log").attachCL("bdp_f_sdb_icop_cup_trans_log_2028.f_sdb_icop_cup_trans_log_2028",  {LowBound: {trxdate: "20260101"}, UpBound: {trxdate: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_cup_trans_log_2028.f_sdb_icop_cup_trans_log_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 145) {
println("[ID: 145]")
try{
   try{ db.createCS("bdp_f_sdb_05_corp_acct_txn_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_05_corp_acct_txn_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_05_corp_acct_txn_2026").createCL("f_sdb_05_corp_acct_txn_2026", {ShardingType: "hash", ShardingKey: {"detlno":1,"billsq":1,"acctno":1,"zhanghao":1,"dcflag":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_05_corp_acct_txn_2026.f_sdb_05_corp_acct_txn_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_05_corp_acct_txn").attachCL("bdp_f_sdb_05_corp_acct_txn_2026.f_sdb_05_corp_acct_txn_2026",  {LowBound: {trandt: "2026-01-01"}, UpBound: {trandt: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_05_corp_acct_txn_2026.f_sdb_05_corp_acct_txn_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 146) {
println("[ID: 146]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ware_biz_info_orderid_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ware_biz_info_orderid_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ware_biz_info_orderid_202601").createCL("f_sdb_icop_ware_biz_info_orderid_202601", {ShardingType: "hash", ShardingKey: {"bizid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ware_biz_info_orderid_202601.f_sdb_icop_ware_biz_info_orderid_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_orderid").attachCL("bdp_f_sdb_icop_ware_biz_info_orderid_202601.f_sdb_icop_ware_biz_info_orderid_202601",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ware_biz_info_orderid_202601.f_sdb_icop_ware_biz_info_orderid_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 147) {
println("[ID: 147]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_log_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_log_2026").createCL("o_cibs_e_log_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_log_2026.o_cibs_e_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_log").attachCL("bdp_cibs_o_cibs_e_log_2026.o_cibs_e_log_2026",  {LowBound: {tran_date: "2026-01-01"}, UpBound: {tran_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_log_2026.o_cibs_e_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 148) {
println("[ID: 148]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_login_info_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_login_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_login_info_2026").createCL("o_cibs_e_login_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_login_info_2026.o_cibs_e_login_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_login_info").attachCL("bdp_cibs_o_cibs_e_login_info_2026.o_cibs_e_login_info_2026",  {LowBound: {login_date: "2026-01-01"}, UpBound: {login_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_login_info_2026.o_cibs_e_login_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 149) {
println("[ID: 149]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_tran_info_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_tran_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_tran_info_2026").createCL("o_cibs_e_tran_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_tran_info_2026.o_cibs_e_tran_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_tran_info").attachCL("bdp_cibs_o_cibs_e_tran_info_2026.o_cibs_e_tran_info_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_tran_info_2026.o_cibs_e_tran_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 150) {
println("[ID: 150]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202601", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601.f_sdb_pcrpt_hsz_nbzhyeb_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601.f_sdb_pcrpt_hsz_nbzhyeb_202601",  {LowBound: {zwrq: "20260101"}, UpBound: {zwrq: "20260201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202601.f_sdb_pcrpt_hsz_nbzhyeb_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 151) {
println("[ID: 151]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202602", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602.f_sdb_pcrpt_hsz_nbzhyeb_202602, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602.f_sdb_pcrpt_hsz_nbzhyeb_202602",  {LowBound: {zwrq: "20260201"}, UpBound: {zwrq: "20260301"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202602.f_sdb_pcrpt_hsz_nbzhyeb_202602, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 152) {
println("[ID: 152]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202603", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603.f_sdb_pcrpt_hsz_nbzhyeb_202603, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603.f_sdb_pcrpt_hsz_nbzhyeb_202603",  {LowBound: {zwrq: "20260301"}, UpBound: {zwrq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202603.f_sdb_pcrpt_hsz_nbzhyeb_202603, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 153) {
println("[ID: 153]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202604", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604.f_sdb_pcrpt_hsz_nbzhyeb_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604.f_sdb_pcrpt_hsz_nbzhyeb_202604",  {LowBound: {zwrq: "20260401"}, UpBound: {zwrq: "20260501"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202604.f_sdb_pcrpt_hsz_nbzhyeb_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 154) {
println("[ID: 154]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202605", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605.f_sdb_pcrpt_hsz_nbzhyeb_202605, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605.f_sdb_pcrpt_hsz_nbzhyeb_202605",  {LowBound: {zwrq: "20260501"}, UpBound: {zwrq: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202605.f_sdb_pcrpt_hsz_nbzhyeb_202605, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 155) {
println("[ID: 155]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202606", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606.f_sdb_pcrpt_hsz_nbzhyeb_202606, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606.f_sdb_pcrpt_hsz_nbzhyeb_202606",  {LowBound: {zwrq: "20260601"}, UpBound: {zwrq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202606.f_sdb_pcrpt_hsz_nbzhyeb_202606, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 156) {
println("[ID: 156]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202607", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607.f_sdb_pcrpt_hsz_nbzhyeb_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607.f_sdb_pcrpt_hsz_nbzhyeb_202607",  {LowBound: {zwrq: "20260701"}, UpBound: {zwrq: "20260801"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202607.f_sdb_pcrpt_hsz_nbzhyeb_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 157) {
println("[ID: 157]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202608", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608.f_sdb_pcrpt_hsz_nbzhyeb_202608, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608.f_sdb_pcrpt_hsz_nbzhyeb_202608",  {LowBound: {zwrq: "20260801"}, UpBound: {zwrq: "20260901"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202608.f_sdb_pcrpt_hsz_nbzhyeb_202608, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 158) {
println("[ID: 158]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202609", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609.f_sdb_pcrpt_hsz_nbzhyeb_202609, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609.f_sdb_pcrpt_hsz_nbzhyeb_202609",  {LowBound: {zwrq: "20260901"}, UpBound: {zwrq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202609.f_sdb_pcrpt_hsz_nbzhyeb_202609, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 159) {
println("[ID: 159]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202610", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610.f_sdb_pcrpt_hsz_nbzhyeb_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610.f_sdb_pcrpt_hsz_nbzhyeb_202610",  {LowBound: {zwrq: "20261001"}, UpBound: {zwrq: "20261101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202610.f_sdb_pcrpt_hsz_nbzhyeb_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 160) {
println("[ID: 160]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202611", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611.f_sdb_pcrpt_hsz_nbzhyeb_202611, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611.f_sdb_pcrpt_hsz_nbzhyeb_202611",  {LowBound: {zwrq: "20261101"}, UpBound: {zwrq: "20261201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202611.f_sdb_pcrpt_hsz_nbzhyeb_202611, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 161) {
println("[ID: 161]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612").createCL("f_sdb_pcrpt_hsz_nbzhyeb_202612", {ShardingType: "hash", ShardingKey: {"hesuanjg":1,"zhanghao":1,"ccy":1,"ywzl":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612.f_sdb_pcrpt_hsz_nbzhyeb_202612, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_nbzhyeb").attachCL("bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612.f_sdb_pcrpt_hsz_nbzhyeb_202612",  {LowBound: {zwrq: "20261201"}, UpBound: {zwrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_nbzhyeb_202612.f_sdb_pcrpt_hsz_nbzhyeb_202612, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 162) {
println("[ID: 162]")
try{
   try{ db.createCS("bdp_ussp_o_ussp_icc_transflowlogimage_2026", {Domain: "bdp_ussp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_ussp_icc_transflowlogimage_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_ussp_icc_transflowlogimage_2026").createCL("o_ussp_icc_transflowlogimage_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_ussp_icc_transflowlogimage_2026.o_ussp_icc_transflowlogimage_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_ussp_icc_transflowlogimage").attachCL("bdp_ussp_o_ussp_icc_transflowlogimage_2026.o_ussp_icc_transflowlogimage_2026",  {LowBound: {uploaddate: "2026-01-01"}, UpBound: {uploaddate: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_ussp_icc_transflowlogimage_2026.o_ussp_icc_transflowlogimage_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 163) {
println("[ID: 163]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_ware_biz_info_detail_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_ware_biz_info_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_detail").attachCL("bdp_2026.f_sdb_icop_ware_biz_info_detail_2026",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_ware_biz_info_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 164) {
println("[ID: 164]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_list_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_list_2026").createCL("f_sdb_ussp_hdhz_list_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_list_2026.f_sdb_ussp_hdhz_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_list").attachCL("bdp_f_sdb_ussp_hdhz_list_2026.f_sdb_ussp_hdhz_list_2026",  {LowBound: {trans_date: "20260101"}, UpBound: {trans_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_list_2026.f_sdb_ussp_hdhz_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 165) {
println("[ID: 165]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_print_cnt_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_print_cnt_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_print_cnt_2026").createCL("f_sdb_ussp_hdhz_print_cnt_2026", {ShardingType: "hash", ShardingKey: {"inner_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_print_cnt_2026.f_sdb_ussp_hdhz_print_cnt_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_print_cnt").attachCL("bdp_f_sdb_ussp_hdhz_print_cnt_2026.f_sdb_ussp_hdhz_print_cnt_2026",  {LowBound: {create_dt: "20260101"}, UpBound: {create_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_print_cnt_2026.f_sdb_ussp_hdhz_print_cnt_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 166) {
println("[ID: 166]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_aprov_user_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_aprov_user_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_aprov_user_2026").createCL("o_cibs_aprov_user_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_aprov_user_2026.o_cibs_aprov_user_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_aprov_user").attachCL("bdp_cibs_o_cibs_aprov_user_2026.o_cibs_aprov_user_2026",  {LowBound: {aprov_date: "2026-01-01"}, UpBound: {aprov_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_aprov_user_2026.o_cibs_aprov_user_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 167) {
println("[ID: 167]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_tran_repayment_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_tran_repayment_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tran_repayment").attachCL("bdp_2026.f_sdb_icop_tran_repayment_2026",  {LowBound: {refundtime: "2026-01-01"}, UpBound: {refundtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_tran_repayment_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 168) {
println("[ID: 168]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_ware_biz_info_idnumber_orderid_2026", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"orderid":1,"idnumber":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_ware_biz_info_idnumber_orderid_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_idnumber_orderid").attachCL("bdp_2026.f_sdb_icop_ware_biz_info_idnumber_orderid_2026",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_ware_biz_info_idnumber_orderid_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 169) {
println("[ID: 169]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202601").createCL("f_sdb_ltts_acct_bal_zip_202601", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202601.f_sdb_ltts_acct_bal_zip_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202601.f_sdb_ltts_acct_bal_zip_202601",  {LowBound: {start_dt: "20260101"}, UpBound: {start_dt: "20260201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202601.f_sdb_ltts_acct_bal_zip_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 170) {
println("[ID: 170]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202602", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202602, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202602").createCL("f_sdb_ltts_acct_bal_zip_202602", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202602.f_sdb_ltts_acct_bal_zip_202602, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202602.f_sdb_ltts_acct_bal_zip_202602",  {LowBound: {start_dt: "20260201"}, UpBound: {start_dt: "20260301"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202602.f_sdb_ltts_acct_bal_zip_202602, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 171) {
println("[ID: 171]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202603", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202603, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202603").createCL("f_sdb_ltts_acct_bal_zip_202603", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202603.f_sdb_ltts_acct_bal_zip_202603, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202603.f_sdb_ltts_acct_bal_zip_202603",  {LowBound: {start_dt: "20260301"}, UpBound: {start_dt: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202603.f_sdb_ltts_acct_bal_zip_202603, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 172) {
println("[ID: 172]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202604", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202604").createCL("f_sdb_ltts_acct_bal_zip_202604", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202604.f_sdb_ltts_acct_bal_zip_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202604.f_sdb_ltts_acct_bal_zip_202604",  {LowBound: {start_dt: "20260401"}, UpBound: {start_dt: "20260501"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202604.f_sdb_ltts_acct_bal_zip_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 173) {
println("[ID: 173]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202605", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202605, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202605").createCL("f_sdb_ltts_acct_bal_zip_202605", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202605.f_sdb_ltts_acct_bal_zip_202605, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202605.f_sdb_ltts_acct_bal_zip_202605",  {LowBound: {start_dt: "20260501"}, UpBound: {start_dt: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202605.f_sdb_ltts_acct_bal_zip_202605, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 174) {
println("[ID: 174]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202606", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202606").createCL("f_sdb_ltts_acct_bal_zip_202606", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202606.f_sdb_ltts_acct_bal_zip_202606, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202606.f_sdb_ltts_acct_bal_zip_202606",  {LowBound: {start_dt: "20260601"}, UpBound: {start_dt: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202606.f_sdb_ltts_acct_bal_zip_202606, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 175) {
println("[ID: 175]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202607", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202607").createCL("f_sdb_ltts_acct_bal_zip_202607", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202607.f_sdb_ltts_acct_bal_zip_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202607.f_sdb_ltts_acct_bal_zip_202607",  {LowBound: {start_dt: "20260701"}, UpBound: {start_dt: "20260801"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202607.f_sdb_ltts_acct_bal_zip_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 176) {
println("[ID: 176]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202608", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202608, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202608").createCL("f_sdb_ltts_acct_bal_zip_202608", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202608.f_sdb_ltts_acct_bal_zip_202608, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202608.f_sdb_ltts_acct_bal_zip_202608",  {LowBound: {start_dt: "20260801"}, UpBound: {start_dt: "20260901"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202608.f_sdb_ltts_acct_bal_zip_202608, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 177) {
println("[ID: 177]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202609", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202609, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202609").createCL("f_sdb_ltts_acct_bal_zip_202609", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202609.f_sdb_ltts_acct_bal_zip_202609, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202609.f_sdb_ltts_acct_bal_zip_202609",  {LowBound: {start_dt: "20260901"}, UpBound: {start_dt: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202609.f_sdb_ltts_acct_bal_zip_202609, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 178) {
println("[ID: 178]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202610", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202610").createCL("f_sdb_ltts_acct_bal_zip_202610", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202610.f_sdb_ltts_acct_bal_zip_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202610.f_sdb_ltts_acct_bal_zip_202610",  {LowBound: {start_dt: "20261001"}, UpBound: {start_dt: "20261101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202610.f_sdb_ltts_acct_bal_zip_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 179) {
println("[ID: 179]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202611", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202611, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202611").createCL("f_sdb_ltts_acct_bal_zip_202611", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202611.f_sdb_ltts_acct_bal_zip_202611, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202611.f_sdb_ltts_acct_bal_zip_202611",  {LowBound: {start_dt: "20261101"}, UpBound: {start_dt: "20261201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202611.f_sdb_ltts_acct_bal_zip_202611, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 180) {
println("[ID: 180]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_acct_bal_zip_202612", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_acct_bal_zip_202612, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_acct_bal_zip_202612").createCL("f_sdb_ltts_acct_bal_zip_202612", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_acct_bal_zip_202612.f_sdb_ltts_acct_bal_zip_202612, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_acct_bal_zip").attachCL("bdp_f_sdb_ltts_acct_bal_zip_202612.f_sdb_ltts_acct_bal_zip_202612",  {LowBound: {start_dt: "20261201"}, UpBound: {start_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_acct_bal_zip_202612.f_sdb_ltts_acct_bal_zip_202612, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 181) {
println("[ID: 181]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ware_biz_info_ecustid_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202601").createCL("f_sdb_icop_ware_biz_info_ecustid_202601", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"orderid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ware_biz_info_ecustid_202601.f_sdb_icop_ware_biz_info_ecustid_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_ecustid").attachCL("bdp_f_sdb_icop_ware_biz_info_ecustid_202601.f_sdb_icop_ware_biz_info_ecustid_202601",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ware_biz_info_ecustid_202601.f_sdb_icop_ware_biz_info_ecustid_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 182) {
println("[ID: 182]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ware_biz_info_ecustid_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202604").createCL("f_sdb_icop_ware_biz_info_ecustid_202604", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"orderid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ware_biz_info_ecustid_202604.f_sdb_icop_ware_biz_info_ecustid_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_ecustid").attachCL("bdp_f_sdb_icop_ware_biz_info_ecustid_202604.f_sdb_icop_ware_biz_info_ecustid_202604",  {LowBound: {ordertime: "20260401"}, UpBound: {ordertime: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ware_biz_info_ecustid_202604.f_sdb_icop_ware_biz_info_ecustid_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 183) {
println("[ID: 183]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ware_biz_info_ecustid_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202607").createCL("f_sdb_icop_ware_biz_info_ecustid_202607", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"orderid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ware_biz_info_ecustid_202607.f_sdb_icop_ware_biz_info_ecustid_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_ecustid").attachCL("bdp_f_sdb_icop_ware_biz_info_ecustid_202607.f_sdb_icop_ware_biz_info_ecustid_202607",  {LowBound: {ordertime: "20260701"}, UpBound: {ordertime: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ware_biz_info_ecustid_202607.f_sdb_icop_ware_biz_info_ecustid_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 184) {
println("[ID: 184]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ware_biz_info_ecustid_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ware_biz_info_ecustid_202610").createCL("f_sdb_icop_ware_biz_info_ecustid_202610", {ShardingType: "hash", ShardingKey: {"ecust_id":1,"orderid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ware_biz_info_ecustid_202610.f_sdb_icop_ware_biz_info_ecustid_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ware_biz_info_ecustid").attachCL("bdp_f_sdb_icop_ware_biz_info_ecustid_202610.f_sdb_icop_ware_biz_info_ecustid_202610",  {LowBound: {ordertime: "20261001"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ware_biz_info_ecustid_202610.f_sdb_icop_ware_biz_info_ecustid_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 185) {
println("[ID: 185]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_indi_receipt_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_indi_receipt_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_indi_receipt_info").attachCL("bdp_2026.f_sdb_indi_receipt_info_2026",  {LowBound: {trandt: "20260101"}, UpBound: {trandt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_indi_receipt_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 186) {
println("[ID: 186]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_zhtt_bp_pad_tran_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_zhtt_bp_pad_tran_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_zhtt_bp_pad_tran").attachCL("bdp_2026.f_sdb_zhtt_bp_pad_tran_2026",  {LowBound: {occur_date: "20260101"}, UpBound: {occur_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_zhtt_bp_pad_tran_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 187) {
println("[ID: 187]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_dc_amt_hst_01_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_dc_amt_hst_01_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_dc_amt_hst_01_202601").createCL("f_sdb_cfas_dc_amt_hst_01_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_dc_amt_hst_01_202601.f_sdb_cfas_dc_amt_hst_01_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_01").attachCL("bdp_f_sdb_cfas_dc_amt_hst_01_202601.f_sdb_cfas_dc_amt_hst_01_202601",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_dc_amt_hst_01_202601.f_sdb_cfas_dc_amt_hst_01_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 188) {
println("[ID: 188]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_dc_amt_hst_01_202604", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_dc_amt_hst_01_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_dc_amt_hst_01_202604").createCL("f_sdb_cfas_dc_amt_hst_01_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_dc_amt_hst_01_202604.f_sdb_cfas_dc_amt_hst_01_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_01").attachCL("bdp_f_sdb_cfas_dc_amt_hst_01_202604.f_sdb_cfas_dc_amt_hst_01_202604",  {LowBound: {tx_date: "20260401"}, UpBound: {tx_date: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_dc_amt_hst_01_202604.f_sdb_cfas_dc_amt_hst_01_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 189) {
println("[ID: 189]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_dc_amt_hst_01_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_dc_amt_hst_01_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_dc_amt_hst_01_202607").createCL("f_sdb_cfas_dc_amt_hst_01_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_dc_amt_hst_01_202607.f_sdb_cfas_dc_amt_hst_01_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_01").attachCL("bdp_f_sdb_cfas_dc_amt_hst_01_202607.f_sdb_cfas_dc_amt_hst_01_202607",  {LowBound: {tx_date: "20260701"}, UpBound: {tx_date: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_dc_amt_hst_01_202607.f_sdb_cfas_dc_amt_hst_01_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 190) {
println("[ID: 190]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_dc_amt_hst_01_202610", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_dc_amt_hst_01_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_dc_amt_hst_01_202610").createCL("f_sdb_cfas_dc_amt_hst_01_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_dc_amt_hst_01_202610.f_sdb_cfas_dc_amt_hst_01_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_01").attachCL("bdp_f_sdb_cfas_dc_amt_hst_01_202610.f_sdb_cfas_dc_amt_hst_01_202610",  {LowBound: {tx_date: "20261001"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_dc_amt_hst_01_202610.f_sdb_cfas_dc_amt_hst_01_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 191) {
println("[ID: 191]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_uaps_mcht_activity_statis_2026", {ShardingType: "hash", ShardingKey: {"activity_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_uaps_mcht_activity_statis_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_mcht_activity_statis").attachCL("bdp_2026.f_sdb_uaps_mcht_activity_statis_2026",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_uaps_mcht_activity_statis_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 192) {
println("[ID: 192]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_01_sum_traceno_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_01_sum_traceno").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_traceno_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_traceno_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 193) {
println("[ID: 193]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_02_sum_traceno_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_02_sum_traceno").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_traceno_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_traceno_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 194) {
println("[ID: 194]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_03_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_03").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_03_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 195) {
println("[ID: 195]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_03_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_03_sum").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 196) {
println("[ID: 196]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_04_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_04").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_04_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 197) {
println("[ID: 197]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_aprov_202601", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_aprov_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_aprov_202601").createCL("o_cibs_aprov_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_aprov_202601.o_cibs_aprov_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_aprov").attachCL("bdp_cibs_o_cibs_aprov_202601.o_cibs_aprov_202601",  {LowBound: {aprov_submit_date: "2026-01-01"}, UpBound: {aprov_submit_date: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_aprov_202601.o_cibs_aprov_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 198) {
println("[ID: 198]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_aprov_202607", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_aprov_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_aprov_202607").createCL("o_cibs_aprov_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_aprov_202607.o_cibs_aprov_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_aprov").attachCL("bdp_cibs_o_cibs_aprov_202607.o_cibs_aprov_202607",  {LowBound: {aprov_submit_date: "2026-07-01"}, UpBound: {aprov_submit_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_aprov_202607.o_cibs_aprov_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 199) {
println("[ID: 199]")
try{
   try{ db.createCS("bdp_f_sdb_risk_backf_plus_dlsbxx_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_risk_backf_plus_dlsbxx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_risk_backf_plus_dlsbxx_202601").createCL("f_sdb_risk_backf_plus_dlsbxx_202601", {ShardingType: "hash", ShardingKey: {"mobile":1,"apdid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_risk_backf_plus_dlsbxx_202601.f_sdb_risk_backf_plus_dlsbxx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_risk_backf_plus_dlsbxx").attachCL("bdp_f_sdb_risk_backf_plus_dlsbxx_202601.f_sdb_risk_backf_plus_dlsbxx_202601",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_risk_backf_plus_dlsbxx_202601.f_sdb_risk_backf_plus_dlsbxx_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 200) {
println("[ID: 200]")
try{
   try{ db.createCS("bdp_f_sdb_risk_backf_plus_dlsbxx_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_risk_backf_plus_dlsbxx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_risk_backf_plus_dlsbxx_202607").createCL("f_sdb_risk_backf_plus_dlsbxx_202607", {ShardingType: "hash", ShardingKey: {"mobile":1,"apdid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_risk_backf_plus_dlsbxx_202607.f_sdb_risk_backf_plus_dlsbxx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_risk_backf_plus_dlsbxx").attachCL("bdp_f_sdb_risk_backf_plus_dlsbxx_202607.f_sdb_risk_backf_plus_dlsbxx_202607",  {LowBound: {load_dt: "20260701"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_risk_backf_plus_dlsbxx_202607.f_sdb_risk_backf_plus_dlsbxx_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 201) {
println("[ID: 201]")
try{
   try{ db.createCS("bdp_f_sdb_csm_tran_record_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_csm_tran_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_csm_tran_record_2026").createCL("f_sdb_csm_tran_record_2026", {ShardingType: "hash", ShardingKey: {"primary_acct_num":1,"ltts_seq_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_csm_tran_record_2026.f_sdb_csm_tran_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_csm_tran_record").attachCL("bdp_f_sdb_csm_tran_record_2026.f_sdb_csm_tran_record_2026",  {LowBound: {ltts_tran_dt: "20260101"}, UpBound: {ltts_tran_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_csm_tran_record_2026.f_sdb_csm_tran_record_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 202) {
println("[ID: 202]")
try{
   try{ db.createCS("bdp_f_sdb_icop_dbank_image_audit_info_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_dbank_image_audit_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_dbank_image_audit_info_2026").createCL("f_sdb_icop_dbank_image_audit_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_dbank_image_audit_info_2026.f_sdb_icop_dbank_image_audit_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_dbank_image_audit_info").attachCL("bdp_f_sdb_icop_dbank_image_audit_info_2026.f_sdb_icop_dbank_image_audit_info_2026",  {LowBound: {created_date: "2026-01-01"}, UpBound: {created_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_dbank_image_audit_info_2026.f_sdb_icop_dbank_image_audit_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 203) {
println("[ID: 203]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_all_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_all_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_all_sum").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_all_sum_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_all_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 204) {
println("[ID: 204]")
try{
   try{ db.createCS("bdp_cibs_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_2026").createCL("o_cibs_e_tran_batch_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_2026.o_cibs_e_tran_batch_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_tran_batch").attachCL("bdp_cibs_2026.o_cibs_e_tran_batch_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_2026.o_cibs_e_tran_batch_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 205) {
println("[ID: 205]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_tran_info_signle_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_tran_info_signle_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_tran_info_signle_2026").createCL("o_cibs_e_tran_info_signle_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_tran_info_signle_2026.o_cibs_e_tran_info_signle_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_tran_info_signle").attachCL("bdp_cibs_o_cibs_e_tran_info_signle_2026.o_cibs_e_tran_info_signle_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_tran_info_signle_2026.o_cibs_e_tran_info_signle_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 206) {
println("[ID: 206]")
try{
   try{ db.createCS("bdp_icop_o_icop_icop_cups_serial_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_icop_cups_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_icop_cups_serial_202601").createCL("o_icop_icop_cups_serial_202601", {ShardingType: "hash", ShardingKey: {"trans_date_time":1,"icop_seq_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_icop_cups_serial_202601.o_icop_icop_cups_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_icop_cups_serial").attachCL("bdp_icop_o_icop_icop_cups_serial_202601.o_icop_icop_cups_serial_202601",  {LowBound: {trans_date: "20260101"}, UpBound: {trans_date: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_icop_cups_serial_202601.o_icop_icop_cups_serial_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 207) {
println("[ID: 207]")
try{
   try{ db.createCS("bdp_icop_o_icop_icop_cups_serial_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_icop_cups_serial_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_icop_cups_serial_202607").createCL("o_icop_icop_cups_serial_202607", {ShardingType: "hash", ShardingKey: {"trans_date_time":1,"icop_seq_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_icop_cups_serial_202607.o_icop_icop_cups_serial_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_icop_cups_serial").attachCL("bdp_icop_o_icop_icop_cups_serial_202607.o_icop_icop_cups_serial_202607",  {LowBound: {trans_date: "20260701"}, UpBound: {trans_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_icop_cups_serial_202607.o_icop_icop_cups_serial_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 208) {
println("[ID: 208]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_zhtt_pub_voucher_2026", {ShardingType: "hash", ShardingKey: {"custno":1,"data_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_zhtt_pub_voucher_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_zhtt_pub_voucher").attachCL("bdp_2026.f_sdb_zhtt_pub_voucher_2026",  {LowBound: {sysdt: "20260101"}, UpBound: {sysdt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_zhtt_pub_voucher_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 209) {
println("[ID: 209]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_zhtt_image_data_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_zhtt_image_data_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_zhtt_image_data").attachCL("bdp_2026.f_sdb_zhtt_image_data_2026",  {LowBound: {imgdate: "20260101"}, UpBound: {imgdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_zhtt_image_data_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 210) {
println("[ID: 210]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_bpt_npc_hwth_list_2026", {ShardingType: "hash", ShardingKey: {"ref_id":1,"pt_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_bpt_npc_hwth_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_bpt_npc_hwth_list").attachCL("bdp_2026.f_sdb_bpt_npc_hwth_list_2026",  {LowBound: {zwrq: "20260101"}, UpBound: {zwrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_bpt_npc_hwth_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 211) {
println("[ID: 211]")
try{
   try{ db.createCS("bdp_icop_o_icop_pom_merch_order_payment_202601", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_pom_merch_order_payment_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_pom_merch_order_payment_202601").createCL("o_icop_pom_merch_order_payment_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_pom_merch_order_payment_202601.o_icop_pom_merch_order_payment_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_pom_merch_order_payment").attachCL("bdp_icop_o_icop_pom_merch_order_payment_202601.o_icop_pom_merch_order_payment_202601",  {LowBound: {paid_date: "2026-01-01"}, UpBound: {paid_date: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_pom_merch_order_payment_202601.o_icop_pom_merch_order_payment_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 212) {
println("[ID: 212]")
try{
   try{ db.createCS("bdp_icop_o_icop_pom_merch_order_payment_202604", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_pom_merch_order_payment_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_pom_merch_order_payment_202604").createCL("o_icop_pom_merch_order_payment_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_pom_merch_order_payment_202604.o_icop_pom_merch_order_payment_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_pom_merch_order_payment").attachCL("bdp_icop_o_icop_pom_merch_order_payment_202604.o_icop_pom_merch_order_payment_202604",  {LowBound: {paid_date: "2026-04-01"}, UpBound: {paid_date: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_pom_merch_order_payment_202604.o_icop_pom_merch_order_payment_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 213) {
println("[ID: 213]")
try{
   try{ db.createCS("bdp_icop_o_icop_pom_merch_order_payment_202607", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_pom_merch_order_payment_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_pom_merch_order_payment_202607").createCL("o_icop_pom_merch_order_payment_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_pom_merch_order_payment_202607.o_icop_pom_merch_order_payment_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_pom_merch_order_payment").attachCL("bdp_icop_o_icop_pom_merch_order_payment_202607.o_icop_pom_merch_order_payment_202607",  {LowBound: {paid_date: "2026-07-01"}, UpBound: {paid_date: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_pom_merch_order_payment_202607.o_icop_pom_merch_order_payment_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 214) {
println("[ID: 214]")
try{
   try{ db.createCS("bdp_icop_o_icop_pom_merch_order_payment_202610", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_pom_merch_order_payment_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_pom_merch_order_payment_202610").createCL("o_icop_pom_merch_order_payment_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_pom_merch_order_payment_202610.o_icop_pom_merch_order_payment_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_pom_merch_order_payment").attachCL("bdp_icop_o_icop_pom_merch_order_payment_202610.o_icop_pom_merch_order_payment_202610",  {LowBound: {paid_date: "2026-10-01"}, UpBound: {paid_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_pom_merch_order_payment_202610.o_icop_pom_merch_order_payment_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 215) {
println("[ID: 215]")
try{
   try{ db.createCS("bdp_icop_o_icop_pom_ware_biz_expand_info_20260101", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_pom_ware_biz_expand_info_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_pom_ware_biz_expand_info_20260101").createCL("o_icop_pom_ware_biz_expand_info_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_pom_ware_biz_expand_info_20260101.o_icop_pom_ware_biz_expand_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_pom_ware_biz_expand_info").attachCL("bdp_icop_o_icop_pom_ware_biz_expand_info_20260101.o_icop_pom_ware_biz_expand_info_202601",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_pom_ware_biz_expand_info_20260101.o_icop_pom_ware_biz_expand_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 216) {
println("[ID: 216]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_log_info_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_log_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_log_info_2026").createCL("o_cibs_e_log_info_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_log_info_2026.o_cibs_e_log_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_log_info").attachCL("bdp_cibs_o_cibs_e_log_info_2026.o_cibs_e_log_info_2026",  {LowBound: {oper_date: "2026-01-01"}, UpBound: {oper_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_log_info_2026.o_cibs_e_log_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 217) {
println("[ID: 217]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_e_payroll_batch_detail_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_e_payroll_batch_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_e_payroll_batch_detail_2026").createCL("o_cibs_e_payroll_batch_detail_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_e_payroll_batch_detail_2026.o_cibs_e_payroll_batch_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_e_payroll_batch_detail").attachCL("bdp_cibs_o_cibs_e_payroll_batch_detail_2026.o_cibs_e_payroll_batch_detail_2026",  {LowBound: {upd_date: "2026-01-01"}, UpBound: {upd_date: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_e_payroll_batch_detail_2026.o_cibs_e_payroll_batch_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 218) {
println("[ID: 218]")
try{
   try{ db.createCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202601", {Domain: "bdp_ussp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_ussp_stm_trade_serialnum_new_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202601").createCL("o_ussp_stm_trade_serialnum_new_202601", {ShardingType: "hash", ShardingKey: {"serialnumber1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202601.o_ussp_stm_trade_serialnum_new_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_ussp_stm_trade_serialnum").attachCL("bdp_ussp_o_ussp_stm_trade_serialnum_new_202601.o_ussp_stm_trade_serialnum_new_202601",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202601.o_ussp_stm_trade_serialnum_new_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 219) {
println("[ID: 219]")
try{
   try{ db.createCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202604", {Domain: "bdp_ussp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_ussp_stm_trade_serialnum_new_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202604").createCL("o_ussp_stm_trade_serialnum_new_202604", {ShardingType: "hash", ShardingKey: {"serialnumber1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202604.o_ussp_stm_trade_serialnum_new_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_ussp_stm_trade_serialnum").attachCL("bdp_ussp_o_ussp_stm_trade_serialnum_new_202604.o_ussp_stm_trade_serialnum_new_202604",  {LowBound: {trade_date: "20260401"}, UpBound: {trade_date: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202604.o_ussp_stm_trade_serialnum_new_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 220) {
println("[ID: 220]")
try{
   try{ db.createCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202607", {Domain: "bdp_ussp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_ussp_stm_trade_serialnum_new_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202607").createCL("o_ussp_stm_trade_serialnum_new_202607", {ShardingType: "hash", ShardingKey: {"serialnumber1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202607.o_ussp_stm_trade_serialnum_new_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_ussp_stm_trade_serialnum").attachCL("bdp_ussp_o_ussp_stm_trade_serialnum_new_202607.o_ussp_stm_trade_serialnum_new_202607",  {LowBound: {trade_date: "20260701"}, UpBound: {trade_date: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202607.o_ussp_stm_trade_serialnum_new_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 221) {
println("[ID: 221]")
try{
   try{ db.createCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202610", {Domain: "bdp_ussp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_ussp_stm_trade_serialnum_new_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_ussp_stm_trade_serialnum_new_202610").createCL("o_ussp_stm_trade_serialnum_new_202610", {ShardingType: "hash", ShardingKey: {"serialnumber1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202610.o_ussp_stm_trade_serialnum_new_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_ussp_stm_trade_serialnum").attachCL("bdp_ussp_o_ussp_stm_trade_serialnum_new_202610.o_ussp_stm_trade_serialnum_new_202610",  {LowBound: {trade_date: "20261001"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_ussp_stm_trade_serialnum_new_202610.o_ussp_stm_trade_serialnum_new_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 222) {
println("[ID: 222]")
try{
   try{ db.createCS("bdp_icop_o_icop_ware_biz_info_202601", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_ware_biz_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_ware_biz_info_202601").createCL("o_icop_ware_biz_info_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_ware_biz_info_202601.o_icop_ware_biz_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_ware_biz_info").attachCL("bdp_icop_o_icop_ware_biz_info_202601.o_icop_ware_biz_info_202601",  {LowBound: {ordertime: "20260101"}, UpBound: {ordertime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_ware_biz_info_202601.o_icop_ware_biz_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 223) {
println("[ID: 223]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_repay_record_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_repay_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_repay_record").attachCL("bdp_2026.f_sdb_cfas_repay_record_2026",  {LowBound: {repdate: "20260101"}, UpBound: {repdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_repay_record_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 224) {
println("[ID: 224]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_04_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_04_sum").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 225) {
println("[ID: 225]")
try{
   try{ db.createCS("bdp_cibs_o_cibs_aprov_trans_body_2026", {Domain: "bdp_cibs_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_cibs_o_cibs_aprov_trans_body_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs_o_cibs_aprov_trans_body_2026").createCL("o_cibs_aprov_trans_body_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_cibs_o_cibs_aprov_trans_body_2026.o_cibs_aprov_trans_body_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_cibs").getCL("o_cibs_aprov_trans_body").attachCL("bdp_cibs_o_cibs_aprov_trans_body_2026.o_cibs_aprov_trans_body_2026",  {LowBound: {remark1: "2026-01-01"}, UpBound: {remark1: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_cibs_o_cibs_aprov_trans_body_2026.o_cibs_aprov_trans_body_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 226) {
println("[ID: 226]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_uaps_recharge_activity_statis_2026", {ShardingType: "hash", ShardingKey: {"activity_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_uaps_recharge_activity_statis_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_recharge_activity_statis").attachCL("bdp_2026.f_sdb_uaps_recharge_activity_statis_2026",  {LowBound: {create_time: "2026-01-01"}, UpBound: {create_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_uaps_recharge_activity_statis_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 227) {
println("[ID: 227]")
try{
   try{ db.createCS("bdp_icop_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_2026").createCL("o_icop_cupst_cupst_acct_transeqinfo_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_2026.o_icop_cupst_cupst_acct_transeqinfo_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_cupst_cupst_acct_transeqinfo").attachCL("bdp_icop_2026.o_icop_cupst_cupst_acct_transeqinfo_2026",  {LowBound: {creattime: "2026-01-01"}, UpBound: {creattime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_2026.o_icop_cupst_cupst_acct_transeqinfo_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 228) {
println("[ID: 228]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_01_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_01_sum").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 229) {
println("[ID: 229]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_02_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_02").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_02_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 230) {
println("[ID: 230]")
try{
   try{ db.createCS("bdp_uaps_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_2026").createCL("o_uaps_a_market_rechargesend_2026", {ShardingType: "hash", ShardingKey: {"activity_id":1,"business_seq_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_2026.o_uaps_a_market_rechargesend_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_a_market_rechargesend").attachCL("bdp_uaps_2026.o_uaps_a_market_rechargesend_2026",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_2026.o_uaps_a_market_rechargesend_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 231) {
println("[ID: 231]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_04_sum_traceno_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_04_sum_traceno").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_traceno_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_04_sum_traceno_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 232) {
println("[ID: 232]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_kdpl_dkzjzd_2026", {ShardingType: "hash", ShardingKey: {"shunxhao":1,"guiylius":1,"kehuzhao":1,"zhhaoxuh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_kdpl_dkzjzd_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_kdpl_dkzjzd").attachCL("bdp_2026.f_sdb_icop_kdpl_dkzjzd_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_kdpl_dkzjzd_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 233) {
println("[ID: 233]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_icop_cup_trans_log_cost_2028", {ShardingType: "hash", ShardingKey: {"cust_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_icop_cup_trans_log_cost_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_cup_trans_log_cost").attachCL("bdp_2028.f_sdb_icop_cup_trans_log_cost_2028",  {LowBound: {month: "20260101"}, UpBound: {month: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_icop_cup_trans_log_cost_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 234) {
println("[ID: 234]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_dc_amt_hst_02_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_dc_amt_hst_02_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_02").attachCL("bdp_2026.f_sdb_cfas_dc_amt_hst_02_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_dc_amt_hst_02_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 235) {
println("[ID: 235]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_dc_amt_hst_03_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_dc_amt_hst_03_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_03").attachCL("bdp_2026.f_sdb_cfas_dc_amt_hst_03_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_dc_amt_hst_03_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 236) {
println("[ID: 236]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_dc_amt_hst_04_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_dc_amt_hst_04_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_dc_amt_hst_04").attachCL("bdp_2026.f_sdb_cfas_dc_amt_hst_04_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_dc_amt_hst_04_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 237) {
println("[ID: 237]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_01_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_01").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_01_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_01_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 238) {
println("[ID: 238]")
try{
   try{ db.createCS("bdp_uaps_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_2026").createCL("o_uaps_a_market_ticket_2026", {ShardingType: "hash", ShardingKey: {"ticket_no":1,"local_customer_id":1,"reserve1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_2026.o_uaps_a_market_ticket_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_a_market_ticket").attachCL("bdp_uaps_2026.o_uaps_a_market_ticket_2026",  {LowBound: {request_date: "20260101"}, UpBound: {request_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_2026.o_uaps_a_market_ticket_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 239) {
println("[ID: 239]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_03_sum_traceno_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_03_sum_traceno").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_traceno_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_03_sum_traceno_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 240) {
println("[ID: 240]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_cfas_ln_mst_hst_02_sum_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_mst_hst_02_sum").attachCL("bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_cfas_ln_mst_hst_02_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 241) {
println("[ID: 241]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_ltts_intlg_dpst_jt_2028", {ShardingType: "hash", ShardingKey: {"acctno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_ltts_intlg_dpst_jt_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_intlg_dpst_jt").attachCL("bdp_2028.f_sdb_ltts_intlg_dpst_jt_2028",  {LowBound: {tandt: "20260101"}, UpBound: {tandt: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_ltts_intlg_dpst_jt_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 242) {
println("[ID: 242]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_uaps_acct_trade_info_2028", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_uaps_acct_trade_info_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_acct_trade_info").attachCL("bdp_2028.f_sdb_uaps_acct_trade_info_2028",  {LowBound: {txn_date: "20260101"}, UpBound: {txn_date: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_uaps_acct_trade_info_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 243) {
println("[ID: 243]")
try{
   try{ db.createCS("bdp_icop_202601", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_202601").createCL("o_icop_batch_icop_ybdf_voucher_detail_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_202601.o_icop_batch_icop_ybdf_voucher_detail_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_batch_icop_ybdf_voucher_detail").attachCL("bdp_icop_202601.o_icop_batch_icop_ybdf_voucher_detail_202601",  {LowBound: {bankdfrtime: "20260101"}, UpBound: {bankdfrtime: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_202601.o_icop_batch_icop_ybdf_voucher_detail_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 244) {
println("[ID: 244]")
try{
   try{ db.createCS("bdp_icop_202607", {Domain: "bdp_icop_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_202607").createCL("o_icop_batch_icop_ybdf_voucher_detail_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_202607.o_icop_batch_icop_ybdf_voucher_detail_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_batch_icop_ybdf_voucher_detail").attachCL("bdp_icop_202607.o_icop_batch_icop_ybdf_voucher_detail_202607",  {LowBound: {bankdfrtime: "20260701"}, UpBound: {bankdfrtime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_202607.o_icop_batch_icop_ybdf_voucher_detail_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 245) {
println("[ID: 245]")
try{
   try{ db.createCS("bdp_uaps_o_uaps_t_txn_sub_refund_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_o_uaps_t_txn_sub_refund_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_o_uaps_t_txn_sub_refund_2026").createCL("o_uaps_t_txn_sub_refund_2026", {ShardingType: "hash", ShardingKey: {"txn_no":1,"sub_order_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_o_uaps_t_txn_sub_refund_2026.o_uaps_t_txn_sub_refund_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_t_txn_sub_refund").attachCL("bdp_uaps_o_uaps_t_txn_sub_refund_2026.o_uaps_t_txn_sub_refund_2026",  {LowBound: {txn_date: "20260101"}, UpBound: {txn_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_o_uaps_t_txn_sub_refund_2026.o_uaps_t_txn_sub_refund_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 246) {
println("[ID: 246]")
try{
   try{ db.createCS("bdp_f_sdb_rcms_loan_scale_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_rcms_loan_scale_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_rcms_loan_scale_2026").createCL("f_sdb_rcms_loan_scale_2026", {ShardingType: "hash", ShardingKey: {"prd_code":1,"orgno":1,"prd_name":1,"cus_manager":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_rcms_loan_scale_2026.f_sdb_rcms_loan_scale_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_rcms_loan_scale").attachCL("bdp_f_sdb_rcms_loan_scale_2026.f_sdb_rcms_loan_scale_2026",  {LowBound: {load_month: "20260101"}, UpBound: {load_month: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_rcms_loan_scale_2026.f_sdb_rcms_loan_scale_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 247) {
println("[ID: 247]")
try{
   try{ db.createCS("bdp_202601", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_202601").createCL("f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202601", {ShardingType: "hash", ShardingKey: {"mobile":1,"apdid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_202601.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info").attachCL("bdp_202601.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202601",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_202601.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 248) {
println("[ID: 248]")
try{
   try{ db.createCS("bdp_202607", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_202607").createCL("f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202607", {ShardingType: "hash", ShardingKey: {"mobile":1,"apdid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_202607.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info").attachCL("bdp_202607.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202607",  {LowBound: {load_dt: "20260701"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_202607.f_sdb_risk_backf_plus_fct_antcloud_eve_devices_info_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 249) {
println("[ID: 249]")
try{
   try{ db.createCS("bdp_uaps_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_2026").createCL("o_uaps_a_market_trans_info_2026", {ShardingType: "hash", ShardingKey: {"activity_id":1,"business_seq_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_2026.o_uaps_a_market_trans_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_a_market_trans_info").attachCL("bdp_uaps_2026.o_uaps_a_market_trans_info_2026",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_2026.o_uaps_a_market_trans_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 250) {
println("[ID: 250]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_eqz_gnr_contact_2028", {ShardingType: "hash", ShardingKey: {"acctno":1,"cust_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_eqz_gnr_contact_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_gnr_contact").attachCL("bdp_2028.f_sdb_eqz_gnr_contact_2028",  {LowBound: {ld_month: "20260101"}, UpBound: {ld_month: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_eqz_gnr_contact_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 251) {
println("[ID: 251]")
try{
   try{ db.createCS("bdp_2028", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2028, error: " + e); throw e; };
   try{ db.getCS("bdp_2028").createCL("f_sdb_uaps_cust_trade_info_2028", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2028.f_sdb_uaps_cust_trade_info_2028, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_cust_trade_info").attachCL("bdp_2028.f_sdb_uaps_cust_trade_info_2028",  {LowBound: {busi_date: "20260101"}, UpBound: {busi_date: "20280101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2028.f_sdb_uaps_cust_trade_info_2028, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 252) {
println("[ID: 252]")
try{
   try{ db.createCS("cffe_k_cffe_quotation_202601", {Domain: "cffe_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cffe_k_cffe_quotation_202601, error: " + e); throw e; };
   try{ db.getCS("cffe_k_cffe_quotation_202601").createCL("k_cffe_quotation_202601", {ShardingType: "hash", ShardingKey: {"instrument_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cffe_k_cffe_quotation_202601.k_cffe_quotation_202601, error: " + e); throw e; };
   try{ db.getCS("cffe").getCL("k_cffe_quotation").attachCL("cffe_k_cffe_quotation_202601.k_cffe_quotation_202601",  {LowBound: {source_timestamp: "1767196800000"}, UpBound: {source_timestamp: "1782835200000"}}) } catch(e) { println("[ERROR] Failed to attachCL cffe_k_cffe_quotation_202601.k_cffe_quotation_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 253) {
println("[ID: 253]")
try{
   try{ db.createCS("cffe_k_cffe_quotation_202607", {Domain: "cffe_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cffe_k_cffe_quotation_202607, error: " + e); throw e; };
   try{ db.getCS("cffe_k_cffe_quotation_202607").createCL("k_cffe_quotation_202607", {ShardingType: "hash", ShardingKey: {"instrument_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cffe_k_cffe_quotation_202607.k_cffe_quotation_202607, error: " + e); throw e; };
   try{ db.getCS("cffe").getCL("k_cffe_quotation").attachCL("cffe_k_cffe_quotation_202607.k_cffe_quotation_202607",  {LowBound: {source_timestamp: "1782835200000"}, UpBound: {source_timestamp: "1798732800000"}}) } catch(e) { println("[ERROR] Failed to attachCL cffe_k_cffe_quotation_202607.k_cffe_quotation_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 254) {
println("[ID: 254]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_ussp_zdmx_list_2026", {ShardingType: "hash", ShardingKey: {"zzh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_ussp_zdmx_list_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_zdmx_list").attachCL("bdp_2026.f_sdb_ussp_zdmx_list_2026",  {LowBound: {zq: "20260101"}, UpBound: {zq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_ussp_zdmx_list_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 255) {
println("[ID: 255]")
try{
   try{ db.createCS("bdp_2026", {Domain: "bdp_domain_202108"}) } catch(e) { println("[ERROR] Failed to createCS bdp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_2026").createCL("f_sdb_icop_crd_bonus_2026", {ShardingType: "hash", ShardingKey: {"order_no":1,"card_no":1,"product_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_2026.f_sdb_icop_crd_bonus_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_crd_bonus").attachCL("bdp_2026.f_sdb_icop_crd_bonus_2026",  {LowBound: {order_date: "20260101"}, UpBound: {order_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_2026.f_sdb_icop_crd_bonus_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 256) {
println("[ID: 256]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_pcm_oprate_log_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_pcm_oprate_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_pcm_oprate_log_2026").createCL("f_sdb_eqz_pcm_oprate_log_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_pcm_oprate_log_2026.f_sdb_eqz_pcm_oprate_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_pcm_oprate_log").attachCL("bdp_f_sdb_eqz_pcm_oprate_log_2026.f_sdb_eqz_pcm_oprate_log_2026",  {LowBound: {req_requesttime: "2026-01-01"}, UpBound: {req_requesttime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_pcm_oprate_log_2026.f_sdb_eqz_pcm_oprate_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 257) {
println("[ID: 257]")
try{
   try{ db.createCS("bdp_f_sdb_icop_channel_unite_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_channel_unite_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_channel_unite_202601").createCL("f_sdb_icop_channel_unite_202601", {ShardingType: "hash", ShardingKey: {"tranacctno":1,"transq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_channel_unite_202601.f_sdb_icop_channel_unite_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_channel_unite").attachCL("bdp_f_sdb_icop_channel_unite_202601.f_sdb_icop_channel_unite_202601",  {LowBound: {trantime: "20260101"}, UpBound: {trantime: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_channel_unite_202601.f_sdb_icop_channel_unite_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 258) {
println("[ID: 258]")
try{
   try{ db.createCS("bdp_f_sdb_icop_channel_unite_202604", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_channel_unite_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_channel_unite_202604").createCL("f_sdb_icop_channel_unite_202604", {ShardingType: "hash", ShardingKey: {"tranacctno":1,"transq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_channel_unite_202604.f_sdb_icop_channel_unite_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_channel_unite").attachCL("bdp_f_sdb_icop_channel_unite_202604.f_sdb_icop_channel_unite_202604",  {LowBound: {trantime: "20260401"}, UpBound: {trantime: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_channel_unite_202604.f_sdb_icop_channel_unite_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 259) {
println("[ID: 259]")
try{
   try{ db.createCS("bdp_f_sdb_icop_channel_unite_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_channel_unite_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_channel_unite_202607").createCL("f_sdb_icop_channel_unite_202607", {ShardingType: "hash", ShardingKey: {"tranacctno":1,"transq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_channel_unite_202607.f_sdb_icop_channel_unite_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_channel_unite").attachCL("bdp_f_sdb_icop_channel_unite_202607.f_sdb_icop_channel_unite_202607",  {LowBound: {trantime: "20260701"}, UpBound: {trantime: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_channel_unite_202607.f_sdb_icop_channel_unite_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 260) {
println("[ID: 260]")
try{
   try{ db.createCS("bdp_f_sdb_icop_channel_unite_202610", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_channel_unite_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_channel_unite_202610").createCL("f_sdb_icop_channel_unite_202610", {ShardingType: "hash", ShardingKey: {"tranacctno":1,"transq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_channel_unite_202610.f_sdb_icop_channel_unite_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_channel_unite").attachCL("bdp_f_sdb_icop_channel_unite_202610.f_sdb_icop_channel_unite_202610",  {LowBound: {trantime: "20261001"}, UpBound: {trantime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_channel_unite_202610.f_sdb_icop_channel_unite_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 261) {
println("[ID: 261]")
try{
   try{ db.createCS("bdp_f_sdb_icop_etc_trans_serial_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_etc_trans_serial_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_etc_trans_serial_2026").createCL("f_sdb_icop_etc_trans_serial_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_etc_trans_serial_2026.f_sdb_icop_etc_trans_serial_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_etc_trans_serial").attachCL("bdp_f_sdb_icop_etc_trans_serial_2026.f_sdb_icop_etc_trans_serial_2026",  {LowBound: {transdate: "20260101"}, UpBound: {transdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_etc_trans_serial_2026.f_sdb_icop_etc_trans_serial_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 262) {
println("[ID: 262]")
try{
   try{ db.createCS("bdp_f_sdb_icop_vam_member_detail_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_vam_member_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_vam_member_detail_2026").createCL("f_sdb_icop_vam_member_detail_2026", {ShardingType: "hash", ShardingKey: {"tx_seqno":1,"r_inner_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_vam_member_detail_2026.f_sdb_icop_vam_member_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_vam_member_detail").attachCL("bdp_f_sdb_icop_vam_member_detail_2026.f_sdb_icop_vam_member_detail_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_vam_member_detail_2026.f_sdb_icop_vam_member_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 263) {
println("[ID: 263]")
try{
   try{ db.createCS("bdp_f_sdb_icop_vam_seller_detail_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_vam_seller_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_vam_seller_detail_2026").createCL("f_sdb_icop_vam_seller_detail_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_vam_seller_detail_2026.f_sdb_icop_vam_seller_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_vam_seller_detail").attachCL("bdp_f_sdb_icop_vam_seller_detail_2026.f_sdb_icop_vam_seller_detail_2026",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_vam_seller_detail_2026.f_sdb_icop_vam_seller_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 264) {
println("[ID: 264]")
try{
   try{ db.createCS("bdp_f_sdb_icop_vam_sum_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_vam_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_vam_sum_2026").createCL("f_sdb_icop_vam_sum_2026", {ShardingType: "hash", ShardingKey: {"account_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_vam_sum_2026.f_sdb_icop_vam_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_vam_sum").attachCL("bdp_f_sdb_icop_vam_sum_2026.f_sdb_icop_vam_sum_2026",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_vam_sum_2026.f_sdb_icop_vam_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 265) {
println("[ID: 265]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_khzh_info_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_khzh_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_khzh_info_2026").createCL("f_sdb_ltts_khzh_info_2026", {ShardingType: "hash", ShardingKey: {"zhanghao":1,"khuzhao1":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_khzh_info_2026.f_sdb_ltts_khzh_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_khzh_info").attachCL("bdp_f_sdb_ltts_khzh_info_2026.f_sdb_ltts_khzh_info_2026",  {LowBound: {kaihriqi: "20260101"}, UpBound: {kaihriqi: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_khzh_info_2026.f_sdb_ltts_khzh_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 266) {
println("[ID: 266]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_term_to_casa_tran_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_term_to_casa_tran_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_term_to_casa_tran_2026").createCL("f_sdb_ltts_term_to_casa_tran_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_term_to_casa_tran_2026.f_sdb_ltts_term_to_casa_tran_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_term_to_casa_tran").attachCL("bdp_f_sdb_ltts_term_to_casa_tran_2026.f_sdb_ltts_term_to_casa_tran_2026",  {LowBound: {transdate: "20260101"}, UpBound: {transdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_term_to_casa_tran_2026.f_sdb_ltts_term_to_casa_tran_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 267) {
println("[ID: 267]")
try{
   try{ db.createCS("bdp_ecif_o_ecif_new_indi_field_update_record_2026", {Domain: "bdp_ecif_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ecif_o_ecif_new_indi_field_update_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ecif_o_ecif_new_indi_field_update_record_2026").createCL("o_ecif_new_indi_field_update_record_2026", {ShardingType: "hash", ShardingKey: {"up_version":1,"party_id":1,"col_name":1,"table_name":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ecif_o_ecif_new_indi_field_update_record_2026.o_ecif_new_indi_field_update_record_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ecif").getCL("o_ecif_new_indi_field_update_record").attachCL("bdp_ecif_o_ecif_new_indi_field_update_record_2026.o_ecif_new_indi_field_update_record_2026",  {LowBound: {updated_ts: "2026-01-01"}, UpBound: {updated_ts: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ecif_o_ecif_new_indi_field_update_record_2026.o_ecif_new_indi_field_update_record_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 268) {
println("[ID: 268]")
try{
   try{ db.createCS("bdp_f_sdb_fncx_acct_info_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_fncx_acct_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_fncx_acct_info_2026").createCL("f_sdb_fncx_acct_info_2026", {ShardingType: "hash", ShardingKey: {"acctno":1,"prodcd":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_fncx_acct_info_2026.f_sdb_fncx_acct_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_fncx_acct_info").attachCL("bdp_f_sdb_fncx_acct_info_2026.f_sdb_fncx_acct_info_2026",  {LowBound: {initdt: "20260101"}, UpBound: {initdt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_fncx_acct_info_2026.f_sdb_fncx_acct_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 269) {
println("[ID: 269]")
try{
   try{ db.createCS("bdp_f_sdb_judi_acct_tran_info_202601", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_acct_tran_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_acct_tran_info_202601").createCL("f_sdb_judi_acct_tran_info_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_acct_tran_info_202601.f_sdb_judi_acct_tran_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_acct_tran_info").attachCL("bdp_f_sdb_judi_acct_tran_info_202601.f_sdb_judi_acct_tran_info_202601",  {LowBound: {tranti: "20260101"}, UpBound: {tranti: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_acct_tran_info_202601.f_sdb_judi_acct_tran_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 270) {
println("[ID: 270]")
try{
   try{ db.createCS("bdp_f_sdb_judi_acct_tran_info_202604", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_acct_tran_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_acct_tran_info_202604").createCL("f_sdb_judi_acct_tran_info_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_acct_tran_info_202604.f_sdb_judi_acct_tran_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_acct_tran_info").attachCL("bdp_f_sdb_judi_acct_tran_info_202604.f_sdb_judi_acct_tran_info_202604",  {LowBound: {tranti: "20260401"}, UpBound: {tranti: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_acct_tran_info_202604.f_sdb_judi_acct_tran_info_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 271) {
println("[ID: 271]")
try{
   try{ db.createCS("bdp_f_sdb_judi_acct_tran_info_202607", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_acct_tran_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_acct_tran_info_202607").createCL("f_sdb_judi_acct_tran_info_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_acct_tran_info_202607.f_sdb_judi_acct_tran_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_acct_tran_info").attachCL("bdp_f_sdb_judi_acct_tran_info_202607.f_sdb_judi_acct_tran_info_202607",  {LowBound: {tranti: "20260701"}, UpBound: {tranti: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_acct_tran_info_202607.f_sdb_judi_acct_tran_info_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 272) {
println("[ID: 272]")
try{
   try{ db.createCS("bdp_f_sdb_judi_acct_tran_info_202610", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_acct_tran_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_acct_tran_info_202610").createCL("f_sdb_judi_acct_tran_info_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_acct_tran_info_202610.f_sdb_judi_acct_tran_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_acct_tran_info").attachCL("bdp_f_sdb_judi_acct_tran_info_202610.f_sdb_judi_acct_tran_info_202610",  {LowBound: {tranti: "20261001"}, UpBound: {tranti: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_acct_tran_info_202610.f_sdb_judi_acct_tran_info_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 273) {
println("[ID: 273]")
try{
   try{ db.createCS("bdp_f_sdb_judi_ltts_rela_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_ltts_rela_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_ltts_rela_2026").createCL("f_sdb_judi_ltts_rela_2026", {ShardingType: "hash", ShardingKey: {"idtype":1,"acctno":1,"idno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_ltts_rela_2026.f_sdb_judi_ltts_rela_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_ltts_rela").attachCL("bdp_f_sdb_judi_ltts_rela_2026.f_sdb_judi_ltts_rela_2026",  {LowBound: {kaihriqi: "20260101"}, UpBound: {kaihriqi: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_ltts_rela_2026.f_sdb_judi_ltts_rela_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 274) {
println("[ID: 274]")
try{
   try{ db.createCS("bdp_f_sdb_judi_fncx_rela_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_judi_fncx_rela_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_judi_fncx_rela_2026").createCL("f_sdb_judi_fncx_rela_2026", {ShardingType: "hash", ShardingKey: {"idno":1,"idtype":1,"acctno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_judi_fncx_rela_2026.f_sdb_judi_fncx_rela_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_judi_fncx_rela").attachCL("bdp_f_sdb_judi_fncx_rela_2026.f_sdb_judi_fncx_rela_2026",  {LowBound: {startdt: "20260101"}, UpBound: {startdt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_judi_fncx_rela_2026.f_sdb_judi_fncx_rela_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 275) {
println("[ID: 275]")
try{
   try{ db.createCS("bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026").createCL("f_sdb_c_agt_corp_ln_dubi_attach_info_2026", {ShardingType: "hash", ShardingKey: {"dubil_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026.f_sdb_c_agt_corp_ln_dubi_attach_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_c_agt_corp_ln_dubi_attach_info").attachCL("bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026.f_sdb_c_agt_corp_ln_dubi_attach_info_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_c_agt_corp_ln_dubi_attach_info_2026.f_sdb_c_agt_corp_ln_dubi_attach_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 276) {
println("[ID: 276]")
try{
   try{ db.createCS("bdp_f_sdb_uaps_t_order_sum_2026", {Domain: "bdp_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_uaps_t_order_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_uaps_t_order_sum_2026").createCL("f_sdb_uaps_t_order_sum_2026", {ShardingType: "hash", ShardingKey: {"mcht_no":1,"store_no":1,"biz_type":1,"cashier_user_no":1,"status":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_uaps_t_order_sum_2026.f_sdb_uaps_t_order_sum_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_t_order_sum").attachCL("bdp_f_sdb_uaps_t_order_sum_2026.f_sdb_uaps_t_order_sum_2026",  {LowBound: {order_date: "20260101"}, UpBound: {order_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_uaps_t_order_sum_2026.f_sdb_uaps_t_order_sum_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 277) {
println("[ID: 277]")
try{
   try{ db.createCS("bdp_ylk_o_ylk_acom_2026", {Domain: "bdp_ylk_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ylk_o_ylk_acom_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk_o_ylk_acom_2026").createCL("o_ylk_acom_2026", {ShardingType: "hash", ShardingKey: {"stzzh":1,"jylxm":1,"jycssj":1,"bwlx":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ylk_o_ylk_acom_2026.o_ylk_acom_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk").getCL("o_ylk_acom").attachCL("bdp_ylk_o_ylk_acom_2026.o_ylk_acom_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ylk_o_ylk_acom_2026.o_ylk_acom_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 278) {
println("[ID: 278]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260101", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260101",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20260109"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 279) {
println("[ID: 279]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260109", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260109, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260109",  {LowBound: {jiaoyirq: "20260109"}, UpBound: {jiaoyirq: "20260117"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260109, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 280) {
println("[ID: 280]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260117", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260117, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260117",  {LowBound: {jiaoyirq: "20260117"}, UpBound: {jiaoyirq: "20260125"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260117, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 281) {
println("[ID: 281]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260125", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260125, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260125",  {LowBound: {jiaoyirq: "20260125"}, UpBound: {jiaoyirq: "20260201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260101.f_sdb_pcrpt_hsz_kfab_zngzcp_20260125, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 282) {
println("[ID: 282]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260201", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260201",  {LowBound: {jiaoyirq: "20260201"}, UpBound: {jiaoyirq: "20260209"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 283) {
println("[ID: 283]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260209", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260209, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260209",  {LowBound: {jiaoyirq: "20260209"}, UpBound: {jiaoyirq: "20260217"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260209, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 284) {
println("[ID: 284]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260217", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260217, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260217",  {LowBound: {jiaoyirq: "20260217"}, UpBound: {jiaoyirq: "20260225"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260217, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 285) {
println("[ID: 285]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260225", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260225, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260225",  {LowBound: {jiaoyirq: "20260225"}, UpBound: {jiaoyirq: "20260301"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260201.f_sdb_pcrpt_hsz_kfab_zngzcp_20260225, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 286) {
println("[ID: 286]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260301", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260301",  {LowBound: {jiaoyirq: "20260301"}, UpBound: {jiaoyirq: "20260309"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 287) {
println("[ID: 287]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260309", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260309, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260309",  {LowBound: {jiaoyirq: "20260309"}, UpBound: {jiaoyirq: "20260317"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260309, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 288) {
println("[ID: 288]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260317", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260317, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260317",  {LowBound: {jiaoyirq: "20260317"}, UpBound: {jiaoyirq: "20260325"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260317, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 289) {
println("[ID: 289]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260325", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260325, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260325",  {LowBound: {jiaoyirq: "20260325"}, UpBound: {jiaoyirq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260301.f_sdb_pcrpt_hsz_kfab_zngzcp_20260325, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 290) {
println("[ID: 290]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260401", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260401",  {LowBound: {jiaoyirq: "20260401"}, UpBound: {jiaoyirq: "20260409"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 291) {
println("[ID: 291]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260409", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260409, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260409",  {LowBound: {jiaoyirq: "20260409"}, UpBound: {jiaoyirq: "20260417"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260409, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 292) {
println("[ID: 292]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260417", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260417, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260417",  {LowBound: {jiaoyirq: "20260417"}, UpBound: {jiaoyirq: "20260425"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260417, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 293) {
println("[ID: 293]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260425", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260425, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260425",  {LowBound: {jiaoyirq: "20260425"}, UpBound: {jiaoyirq: "20260501"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260401.f_sdb_pcrpt_hsz_kfab_zngzcp_20260425, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 294) {
println("[ID: 294]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260501", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260501",  {LowBound: {jiaoyirq: "20260501"}, UpBound: {jiaoyirq: "20260509"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 295) {
println("[ID: 295]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260509", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260509, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260509",  {LowBound: {jiaoyirq: "20260509"}, UpBound: {jiaoyirq: "20260517"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260509, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 296) {
println("[ID: 296]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260517", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260517, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260517",  {LowBound: {jiaoyirq: "20260517"}, UpBound: {jiaoyirq: "20260525"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260517, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 297) {
println("[ID: 297]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260525", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260525, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260525",  {LowBound: {jiaoyirq: "20260525"}, UpBound: {jiaoyirq: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260501.f_sdb_pcrpt_hsz_kfab_zngzcp_20260525, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 298) {
println("[ID: 298]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260601", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260601",  {LowBound: {jiaoyirq: "20260601"}, UpBound: {jiaoyirq: "20260609"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 299) {
println("[ID: 299]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260609", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260609, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260609",  {LowBound: {jiaoyirq: "20260609"}, UpBound: {jiaoyirq: "20260617"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260609, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 300) {
println("[ID: 300]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260617", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260617, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260617",  {LowBound: {jiaoyirq: "20260617"}, UpBound: {jiaoyirq: "20260625"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260617, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 301) {
println("[ID: 301]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260625", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260625, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260625",  {LowBound: {jiaoyirq: "20260625"}, UpBound: {jiaoyirq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260601.f_sdb_pcrpt_hsz_kfab_zngzcp_20260625, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 302) {
println("[ID: 302]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260701", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260701",  {LowBound: {jiaoyirq: "20260701"}, UpBound: {jiaoyirq: "20260709"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 303) {
println("[ID: 303]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260709", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260709, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260709",  {LowBound: {jiaoyirq: "20260709"}, UpBound: {jiaoyirq: "20260717"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260709, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 304) {
println("[ID: 304]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260717", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260717, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260717",  {LowBound: {jiaoyirq: "20260717"}, UpBound: {jiaoyirq: "20260725"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260717, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 305) {
println("[ID: 305]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260725", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260725, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260725",  {LowBound: {jiaoyirq: "20260725"}, UpBound: {jiaoyirq: "20260801"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260701.f_sdb_pcrpt_hsz_kfab_zngzcp_20260725, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 306) {
println("[ID: 306]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260801", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260801",  {LowBound: {jiaoyirq: "20260801"}, UpBound: {jiaoyirq: "20260809"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 307) {
println("[ID: 307]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260809", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260809, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260809",  {LowBound: {jiaoyirq: "20260809"}, UpBound: {jiaoyirq: "20260817"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260809, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 308) {
println("[ID: 308]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260817", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260817, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260817",  {LowBound: {jiaoyirq: "20260817"}, UpBound: {jiaoyirq: "20260825"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260817, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 309) {
println("[ID: 309]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260825", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260825, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260825",  {LowBound: {jiaoyirq: "20260825"}, UpBound: {jiaoyirq: "20260901"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260801.f_sdb_pcrpt_hsz_kfab_zngzcp_20260825, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 310) {
println("[ID: 310]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260901", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260901",  {LowBound: {jiaoyirq: "20260901"}, UpBound: {jiaoyirq: "20260909"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 311) {
println("[ID: 311]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260909", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260909, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260909",  {LowBound: {jiaoyirq: "20260909"}, UpBound: {jiaoyirq: "20260917"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260909, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 312) {
println("[ID: 312]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260917", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260917, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260917",  {LowBound: {jiaoyirq: "20260917"}, UpBound: {jiaoyirq: "20260925"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260917, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 313) {
println("[ID: 313]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20260925", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260925, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260925",  {LowBound: {jiaoyirq: "20260925"}, UpBound: {jiaoyirq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20260901.f_sdb_pcrpt_hsz_kfab_zngzcp_20260925, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 314) {
println("[ID: 314]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261001", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261001",  {LowBound: {jiaoyirq: "20261001"}, UpBound: {jiaoyirq: "20261009"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 315) {
println("[ID: 315]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261009", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261009, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261009",  {LowBound: {jiaoyirq: "20261009"}, UpBound: {jiaoyirq: "20261017"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261009, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 316) {
println("[ID: 316]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261017", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261017, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261017",  {LowBound: {jiaoyirq: "20261017"}, UpBound: {jiaoyirq: "20261025"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261017, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 317) {
println("[ID: 317]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261025", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261025, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261025",  {LowBound: {jiaoyirq: "20261025"}, UpBound: {jiaoyirq: "20261101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261001.f_sdb_pcrpt_hsz_kfab_zngzcp_20261025, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 318) {
println("[ID: 318]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261101", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261101",  {LowBound: {jiaoyirq: "20261101"}, UpBound: {jiaoyirq: "20261109"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 319) {
println("[ID: 319]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261109", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261109, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261109",  {LowBound: {jiaoyirq: "20261109"}, UpBound: {jiaoyirq: "20261117"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261109, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 320) {
println("[ID: 320]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261117", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261117, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261117",  {LowBound: {jiaoyirq: "20261117"}, UpBound: {jiaoyirq: "20261125"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261117, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 321) {
println("[ID: 321]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261125", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261125, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261125",  {LowBound: {jiaoyirq: "20261125"}, UpBound: {jiaoyirq: "20261201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261101.f_sdb_pcrpt_hsz_kfab_zngzcp_20261125, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 322) {
println("[ID: 322]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261201", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261201",  {LowBound: {jiaoyirq: "20261201"}, UpBound: {jiaoyirq: "20261209"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 323) {
println("[ID: 323]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261209", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261209, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261209",  {LowBound: {jiaoyirq: "20261209"}, UpBound: {jiaoyirq: "20261217"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261209, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 324) {
println("[ID: 324]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261217", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261217, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261217",  {LowBound: {jiaoyirq: "20261217"}, UpBound: {jiaoyirq: "20261225"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261217, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 325) {
println("[ID: 325]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201").createCL("f_sdb_pcrpt_hsz_kfab_zngzcp_20261225", {ShardingType: "hash", ShardingKey: {"guiylius":1,"jiaoyigy":1,"guiyshux":1,"huobdaih":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261225, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_hsz_kfab_zngzcp").attachCL("bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261225",  {LowBound: {jiaoyirq: "20261225"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_hsz_kfab_zngzcp_20261201.f_sdb_pcrpt_hsz_kfab_zngzcp_20261225, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 326) {
println("[ID: 326]")
try{
   try{ db.createCS("bdp_p_sdb_icms_acct_repay_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_p_sdb_icms_acct_repay_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_p_sdb_icms_acct_repay_2026").createCL("p_sdb_icms_acct_repay_2026", {ShardingType: "hash", ShardingKey: {"card_no":1,"xtranno":1,"inp_time":1,"trans_type":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_p_sdb_icms_acct_repay_2026.p_sdb_icms_acct_repay_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("p_sdb_icms_acct_repay").attachCL("bdp_p_sdb_icms_acct_repay_2026.p_sdb_icms_acct_repay_2026",  {LowBound: {repay_dt: "20260101"}, UpBound: {repay_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_p_sdb_icms_acct_repay_2026.p_sdb_icms_acct_repay_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 327) {
println("[ID: 327]")
try{
   try{ db.createCS("bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026").createCL("f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026.f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_cust_g_ac_corp_dep_acct_inf").attachCL("bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026.f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026",  {LowBound: {data_dt: "20260101"}, UpBound: {data_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026.f_sdb_icop_cust_g_ac_corp_dep_acct_inf_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 328) {
println("[ID: 328]")
try{
   try{ db.createCS("bdp_f_sdb_icop_ab_elec_seallog_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_ab_elec_seallog_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_ab_elec_seallog_2026").createCL("f_sdb_icop_ab_elec_seallog_2026", {ShardingType: "hash", ShardingKey: {"verificationcode":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_ab_elec_seallog_2026.f_sdb_icop_ab_elec_seallog_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_ab_elec_seallog").attachCL("bdp_f_sdb_icop_ab_elec_seallog_2026.f_sdb_icop_ab_elec_seallog_2026",  {LowBound: {tradedate: "20260101"}, UpBound: {tradedate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_ab_elec_seallog_2026.f_sdb_icop_ab_elec_seallog_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 329) {
println("[ID: 329]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_xdck_lxmx_2026_2025", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_xdck_lxmx_2026_2025, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_xdck_lxmx_2026_2025").createCL("f_sdb_eqz_xdck_lxmx_2026_2025", {ShardingType: "hash", ShardingKey: {"cust_acct_id":1,"zhanghao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_xdck_lxmx_2026_2025.f_sdb_eqz_xdck_lxmx_2026_2025, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_xdck_lxmx").attachCL("bdp_f_sdb_eqz_xdck_lxmx_2026_2025.f_sdb_eqz_xdck_lxmx_2026_2025",  {LowBound: {int_dt: "20260101"}, UpBound: {int_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_xdck_lxmx_2026_2025.f_sdb_eqz_xdck_lxmx_2026_2025, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 330) {
println("[ID: 330]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_cust_acct_bal_202601", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_cust_acct_bal_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_cust_acct_bal_202601").createCL("f_sdb_ltts_cust_acct_bal_202601", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_cust_acct_bal_202601.f_sdb_ltts_cust_acct_bal_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_cust_acct_bal").attachCL("bdp_f_sdb_ltts_cust_acct_bal_202601.f_sdb_ltts_cust_acct_bal_202601",  {LowBound: {count_dt: "20260101"}, UpBound: {count_dt: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_cust_acct_bal_202601.f_sdb_ltts_cust_acct_bal_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 331) {
println("[ID: 331]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_cust_acct_bal_202606", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_cust_acct_bal_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_cust_acct_bal_202606").createCL("f_sdb_ltts_cust_acct_bal_202606", {ShardingType: "hash", ShardingKey: {"agt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_cust_acct_bal_202606.f_sdb_ltts_cust_acct_bal_202606, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_cust_acct_bal").attachCL("bdp_f_sdb_ltts_cust_acct_bal_202606.f_sdb_ltts_cust_acct_bal_202606",  {LowBound: {count_dt: "20260601"}, UpBound: {count_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_cust_acct_bal_202606.f_sdb_ltts_cust_acct_bal_202606, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 332) {
println("[ID: 332]")
try{
   try{ db.createCS("bdp_f_sdb_pcrpt_input_posdetmx_2027", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pcrpt_input_posdetmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pcrpt_input_posdetmx_2027").createCL("f_sdb_pcrpt_input_posdetmx_2027", {ShardingType: "hash", ShardingKey: {"sdb_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pcrpt_input_posdetmx_2027.f_sdb_pcrpt_input_posdetmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pcrpt_input_posdetmx").attachCL("bdp_f_sdb_pcrpt_input_posdetmx_2027.f_sdb_pcrpt_input_posdetmx_2027",  {LowBound: {ysjyrq: "20260101"}, UpBound: {ysjyrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pcrpt_input_posdetmx_2027.f_sdb_pcrpt_input_posdetmx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 333) {
println("[ID: 333]")
try{
   try{ db.createCS("bdp_f_sdb_cemp_deliver_typerecord_his_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cemp_deliver_typerecord_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cemp_deliver_typerecord_his_2026").createCL("f_sdb_cemp_deliver_typerecord_his_2026", {ShardingType: "hash", ShardingKey: {"deliver_type":1,"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cemp_deliver_typerecord_his_2026.f_sdb_cemp_deliver_typerecord_his_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cemp_deliver_typerecord_his").attachCL("bdp_f_sdb_cemp_deliver_typerecord_his_2026.f_sdb_cemp_deliver_typerecord_his_2026",  {LowBound: {created_dt: "2026-01-01 00:00:00"}, UpBound: {created_dt: "2027-01-01 00:00:00"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cemp_deliver_typerecord_his_2026.f_sdb_cemp_deliver_typerecord_his_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 334) {
println("[ID: 334]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601").createCL("o_icop_epcc_epcc_tranacct_serial_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601.o_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601.o_icop_epcc_epcc_tranacct_serial_202601",  {LowBound: {createtime: "2026-01-01"}, UpBound: {createtime: "2026-02-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202601.o_icop_epcc_epcc_tranacct_serial_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 335) {
println("[ID: 335]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602").createCL("o_icop_epcc_epcc_tranacct_serial_202602", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602.o_icop_epcc_epcc_tranacct_serial_202602, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602.o_icop_epcc_epcc_tranacct_serial_202602",  {LowBound: {createtime: "2026-02-01"}, UpBound: {createtime: "2026-03-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202602.o_icop_epcc_epcc_tranacct_serial_202602, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 336) {
println("[ID: 336]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603").createCL("o_icop_epcc_epcc_tranacct_serial_202603", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603.o_icop_epcc_epcc_tranacct_serial_202603, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603.o_icop_epcc_epcc_tranacct_serial_202603",  {LowBound: {createtime: "2026-03-01"}, UpBound: {createtime: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202603.o_icop_epcc_epcc_tranacct_serial_202603, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 337) {
println("[ID: 337]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604").createCL("o_icop_epcc_epcc_tranacct_serial_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604.o_icop_epcc_epcc_tranacct_serial_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604.o_icop_epcc_epcc_tranacct_serial_202604",  {LowBound: {createtime: "2026-04-01"}, UpBound: {createtime: "2026-05-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202604.o_icop_epcc_epcc_tranacct_serial_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 338) {
println("[ID: 338]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605").createCL("o_icop_epcc_epcc_tranacct_serial_202605", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605.o_icop_epcc_epcc_tranacct_serial_202605, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605.o_icop_epcc_epcc_tranacct_serial_202605",  {LowBound: {createtime: "2026-05-01"}, UpBound: {createtime: "2026-06-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202605.o_icop_epcc_epcc_tranacct_serial_202605, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 339) {
println("[ID: 339]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606").createCL("o_icop_epcc_epcc_tranacct_serial_202606", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606.o_icop_epcc_epcc_tranacct_serial_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606.o_icop_epcc_epcc_tranacct_serial_202606",  {LowBound: {createtime: "2026-06-01"}, UpBound: {createtime: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202606.o_icop_epcc_epcc_tranacct_serial_202606, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 340) {
println("[ID: 340]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607").createCL("o_icop_epcc_epcc_tranacct_serial_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607.o_icop_epcc_epcc_tranacct_serial_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607.o_icop_epcc_epcc_tranacct_serial_202607",  {LowBound: {createtime: "2026-07-01"}, UpBound: {createtime: "2026-08-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202607.o_icop_epcc_epcc_tranacct_serial_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 341) {
println("[ID: 341]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608").createCL("o_icop_epcc_epcc_tranacct_serial_202608", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608.o_icop_epcc_epcc_tranacct_serial_202608, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608.o_icop_epcc_epcc_tranacct_serial_202608",  {LowBound: {createtime: "2026-08-01"}, UpBound: {createtime: "2026-09-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202608.o_icop_epcc_epcc_tranacct_serial_202608, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 342) {
println("[ID: 342]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609").createCL("o_icop_epcc_epcc_tranacct_serial_202609", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609.o_icop_epcc_epcc_tranacct_serial_202609, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609.o_icop_epcc_epcc_tranacct_serial_202609",  {LowBound: {createtime: "2026-09-01"}, UpBound: {createtime: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202609.o_icop_epcc_epcc_tranacct_serial_202609, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 343) {
println("[ID: 343]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610").createCL("o_icop_epcc_epcc_tranacct_serial_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610.o_icop_epcc_epcc_tranacct_serial_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610.o_icop_epcc_epcc_tranacct_serial_202610",  {LowBound: {createtime: "2026-10-01"}, UpBound: {createtime: "2026-11-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202610.o_icop_epcc_epcc_tranacct_serial_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 344) {
println("[ID: 344]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611").createCL("o_icop_epcc_epcc_tranacct_serial_202611", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611.o_icop_epcc_epcc_tranacct_serial_202611, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611.o_icop_epcc_epcc_tranacct_serial_202611",  {LowBound: {createtime: "2026-11-01"}, UpBound: {createtime: "2026-12-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202611.o_icop_epcc_epcc_tranacct_serial_202611, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 345) {
println("[ID: 345]")
try{
   try{ db.createCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612", {Domain: "bdp_icop_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612, error: " + e); throw e; };
   try{ db.getCS("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612").createCL("o_icop_epcc_epcc_tranacct_serial_202612", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612.o_icop_epcc_epcc_tranacct_serial_202612, error: " + e); throw e; };
   try{ db.getCS("bdp_icop").getCL("o_icop_epcc_epcc_tranacct_serial").attachCL("bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612.o_icop_epcc_epcc_tranacct_serial_202612",  {LowBound: {createtime: "2026-12-01"}, UpBound: {createtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_icop_o_icop_epcc_epcc_tranacct_serial_202612.o_icop_epcc_epcc_tranacct_serial_202612, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 346) {
println("[ID: 346]")
try{
   try{ db.createCS("cmds_k_cmds_day_2026", {Domain: "cffe_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cmds_k_cmds_day_2026, error: " + e); throw e; };
   try{ db.getCS("cmds_k_cmds_day_2026").createCL("k_cmds_day_2026", {ShardingType: "hash", ShardingKey: {"quote_stamp":1,"quotation_type":1,"security_id":1,"index_type":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cmds_k_cmds_day_2026.k_cmds_day_2026, error: " + e); throw e; };
   try{ db.getCS("cmds").getCL("k_cmds_day").attachCL("cmds_k_cmds_day_2026.k_cmds_day_2026",  {LowBound: {quote_stamp: "1767196800"}, UpBound: {quote_stamp: "1798732800"}}) } catch(e) { println("[ERROR] Failed to attachCL cmds_k_cmds_day_2026.k_cmds_day_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 347) {
println("[ID: 347]")
try{
   try{ db.createCS("bdp_f_sdb_hpls_ismp_imageid_hlkd_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_hpls_ismp_imageid_hlkd_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_hpls_ismp_imageid_hlkd_2026").createCL("f_sdb_hpls_ismp_imageid_hlkd_2026", {ShardingType: "hash", ShardingKey: {"custom_dubil":1,"busi_serial_no":1,"business_file_type":1,"customer_ecif":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_hpls_ismp_imageid_hlkd_2026.f_sdb_hpls_ismp_imageid_hlkd_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_hpls_ismp_imageid_hlkd").attachCL("bdp_f_sdb_hpls_ismp_imageid_hlkd_2026.f_sdb_hpls_ismp_imageid_hlkd_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_hpls_ismp_imageid_hlkd_2026.f_sdb_hpls_ismp_imageid_hlkd_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 348) {
println("[ID: 348]")
try{
   try{ db.createCS("bdp_f_sdb_hpls_ismp_imageid_klmd_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_hpls_ismp_imageid_klmd_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_hpls_ismp_imageid_klmd_2026").createCL("f_sdb_hpls_ismp_imageid_klmd_2026", {ShardingType: "hash", ShardingKey: {"custom_dubil":1,"busi_serial_no":1,"business_file_type":1,"customer_ecif":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_hpls_ismp_imageid_klmd_2026.f_sdb_hpls_ismp_imageid_klmd_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_hpls_ismp_imageid_klmd").attachCL("bdp_f_sdb_hpls_ismp_imageid_klmd_2026.f_sdb_hpls_ismp_imageid_klmd_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_hpls_ismp_imageid_klmd_2026.f_sdb_hpls_ismp_imageid_klmd_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 349) {
println("[ID: 349]")
try{
   try{ db.createCS("bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026").createCL("p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026", {ShardingType: "hash", ShardingKey: {"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026.p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf").attachCL("bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026.p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026",  {LowBound: {data_dt: "20260101"}, UpBound: {data_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026.p_sdb_icop_cust_rpt_corp_fund_redeem_devote_inf_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 350) {
println("[ID: 350]")
try{
   try{ db.createCS("bdp_uaps_o_uaps_t_txn_dbt_new_2025", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_o_uaps_t_txn_dbt_new_2025, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_o_uaps_t_txn_dbt_new_2025").createCL("o_uaps_t_txn_dbt_new_2025", {ShardingType: "hash", ShardingKey: {"order_no":1,"tran_no":1,"txn_no":1,"mcht_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_o_uaps_t_txn_dbt_new_2025.o_uaps_t_txn_dbt_new_2025, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_t_txn_dbt_new").attachCL("bdp_uaps_o_uaps_t_txn_dbt_new_2025.o_uaps_t_txn_dbt_new_2025",  {LowBound: {txn_date: "20260101"}, UpBound: {txn_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_o_uaps_t_txn_dbt_new_2025.o_uaps_t_txn_dbt_new_2025, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 351) {
println("[ID: 351]")
try{
   try{ db.createCS("cmds_k_cmds_minute_2026", {Domain: "cffe_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cmds_k_cmds_minute_2026, error: " + e); throw e; };
   try{ db.getCS("cmds_k_cmds_minute_2026").createCL("k_cmds_minute_2026", {ShardingType: "hash", ShardingKey: {"quotation_type":1,"security_id":1,"index_type":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cmds_k_cmds_minute_2026.k_cmds_minute_2026, error: " + e); throw e; };
   try{ db.getCS("cmds").getCL("k_cmds_minute").attachCL("cmds_k_cmds_minute_2026.k_cmds_minute_2026",  {LowBound: {quote_stamp: "1767196800"}, UpBound: {quote_stamp: "1798732800"}}) } catch(e) { println("[ERROR] Failed to attachCL cmds_k_cmds_minute_2026.k_cmds_minute_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 352) {
println("[ID: 352]")
try{
   try{ db.createCS("bdp_f_sdb_cemp_survey_respondent_seq_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cemp_survey_respondent_seq_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cemp_survey_respondent_seq_2026").createCL("f_sdb_cemp_survey_respondent_seq_2026", {ShardingType: "hash", ShardingKey: {"seq":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cemp_survey_respondent_seq_2026.f_sdb_cemp_survey_respondent_seq_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cemp_survey_respondent_seq").attachCL("bdp_f_sdb_cemp_survey_respondent_seq_2026.f_sdb_cemp_survey_respondent_seq_2026",  {LowBound: {begin_time: "2026-01-01 00:00:00"}, UpBound: {begin_time: "2027-01-01 00:00:00"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cemp_survey_respondent_seq_2026.f_sdb_cemp_survey_respondent_seq_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 353) {
println("[ID: 353]")
try{
   try{ db.createCS("bdp_o_ltts_kdpl_edtzmx_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_o_ltts_kdpl_edtzmx_2027").createCL("o_ltts_kdpl_edtzmx_2027", {ShardingType: "hash", ShardingKey: {"jioylius":1,"zhanghao":1,"farendma":1,"edutzlex":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("o_ltts_kdpl_edtzmx").attachCL("bdp_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 354) {
println("[ID: 354]")
try{
   try{ db.createCS("bdp_f_sdb_pfb_dfcf_lsh_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pfb_dfcf_lsh_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pfb_dfcf_lsh_2027").createCL("f_sdb_pfb_dfcf_lsh_2027", {ShardingType: "hash", ShardingKey: {"billsq":1,"acctno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pfb_dfcf_lsh_2027.f_sdb_pfb_dfcf_lsh_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pfb_dfcf_lsh").attachCL("bdp_f_sdb_pfb_dfcf_lsh_2027.f_sdb_pfb_dfcf_lsh_2027",  {LowBound: {trandt: "2026-01-01"}, UpBound: {trandt: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pfb_dfcf_lsh_2027.f_sdb_pfb_dfcf_lsh_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 355) {
println("[ID: 355]")
try{
   try{ db.createCS("bdp_f_sdb_pfb_dfcf_mx_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pfb_dfcf_mx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pfb_dfcf_mx_2027").createCL("f_sdb_pfb_dfcf_mx_2027", {ShardingType: "hash", ShardingKey: {"dfxhao":1,"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pfb_dfcf_mx_2027.f_sdb_pfb_dfcf_mx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pfb_dfcf_mx").attachCL("bdp_f_sdb_pfb_dfcf_mx_2027.f_sdb_pfb_dfcf_mx_2027",  {LowBound: {trandt: "2026-01-01"}, UpBound: {trandt: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pfb_dfcf_mx_2027.f_sdb_pfb_dfcf_mx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 356) {
println("[ID: 356]")
try{
   try{ db.createCS("cmds_k_cmds_hour_2026", {Domain: "cffe_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cmds_k_cmds_hour_2026, error: " + e); throw e; };
   try{ db.getCS("cmds_k_cmds_hour_2026").createCL("k_cmds_hour_2026", {ShardingType: "hash", ShardingKey: {"quote_stamp":1,"quotation_type":1,"security_id":1,"index_type":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cmds_k_cmds_hour_2026.k_cmds_hour_2026, error: " + e); throw e; };
   try{ db.getCS("cmds").getCL("k_cmds_hour").attachCL("cmds_k_cmds_hour_2026.k_cmds_hour_2026",  {LowBound: {quote_stamp: "1767196800"}, UpBound: {quote_stamp: "1798732800"}}) } catch(e) { println("[ERROR] Failed to attachCL cmds_k_cmds_hour_2026.k_cmds_hour_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 357) {
println("[ID: 357]")
try{
   try{ db.createCS("bdp_uaps_o_uaps_t_txn_credit_installment_2027", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_uaps_o_uaps_t_txn_credit_installment_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps_o_uaps_t_txn_credit_installment_2027").createCL("o_uaps_t_txn_credit_installment_2027", {ShardingType: "hash", ShardingKey: {"txn_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_uaps_o_uaps_t_txn_credit_installment_2027.o_uaps_t_txn_credit_installment_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_uaps").getCL("o_uaps_t_txn_credit_installment").attachCL("bdp_uaps_o_uaps_t_txn_credit_installment_2027.o_uaps_t_txn_credit_installment_2027",  {LowBound: {create_time: "2026-01-01"}, UpBound: {create_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_uaps_o_uaps_t_txn_credit_installment_2027.o_uaps_t_txn_credit_installment_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 358) {
println("[ID: 358]")
try{
   try{ db.createCS("cmds_k_cmds_market_data_summary_bond_202601", {Domain: "cmds_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cmds_k_cmds_market_data_summary_bond_202601, error: " + e); throw e; };
   try{ db.getCS("cmds_k_cmds_market_data_summary_bond_202601").createCL("k_cmds_market_data_summary_bond_202601", {ShardingType: "hash", ShardingKey: {"_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cmds_k_cmds_market_data_summary_bond_202601.k_cmds_market_data_summary_bond_202601, error: " + e); throw e; };
   try{ db.getCS("cmds").getCL("k_cmds_market_data_summary_bond").attachCL("cmds_k_cmds_market_data_summary_bond_202601.k_cmds_market_data_summary_bond_202601",  {LowBound: {quotation_time: "1767196800"}, UpBound: {quotation_time: "1782835200"}}) } catch(e) { println("[ERROR] Failed to attachCL cmds_k_cmds_market_data_summary_bond_202601.k_cmds_market_data_summary_bond_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 359) {
println("[ID: 359]")
try{
   try{ db.createCS("cmds_k_cmds_market_data_summary_bond_202607", {Domain: "cmds_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS cmds_k_cmds_market_data_summary_bond_202607, error: " + e); throw e; };
   try{ db.getCS("cmds_k_cmds_market_data_summary_bond_202607").createCL("k_cmds_market_data_summary_bond_202607", {ShardingType: "hash", ShardingKey: {"_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL cmds_k_cmds_market_data_summary_bond_202607.k_cmds_market_data_summary_bond_202607, error: " + e); throw e; };
   try{ db.getCS("cmds").getCL("k_cmds_market_data_summary_bond").attachCL("cmds_k_cmds_market_data_summary_bond_202607.k_cmds_market_data_summary_bond_202607",  {LowBound: {quotation_time: "1782835200"}, UpBound: {quotation_time: "1798732800"}}) } catch(e) { println("[ERROR] Failed to attachCL cmds_k_cmds_market_data_summary_bond_202607.k_cmds_market_data_summary_bond_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 360) {
println("[ID: 360]")
try{
   try{ db.createCS("bdp_f_sdb_pfb_ismp_imageid_2027", {Domain: "bdp_ds02_domain_2022"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pfb_ismp_imageid_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pfb_ismp_imageid_2027").createCL("f_sdb_pfb_ismp_imageid_2027", {ShardingType: "hash", ShardingKey: {"zjhm":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pfb_ismp_imageid_2027.f_sdb_pfb_ismp_imageid_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pfb_ismp_imageid").attachCL("bdp_f_sdb_pfb_ismp_imageid_2027.f_sdb_pfb_ismp_imageid_2027",  {LowBound: {imagetime: "20260101"}, UpBound: {imagetime: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pfb_ismp_imageid_2027.f_sdb_pfb_ismp_imageid_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 361) {
println("[ID: 361]")
try{
   try{ db.createCS("bdp_ltts_o_ltts_kdpb_edspxx_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ltts_o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_ltts_o_ltts_kdpb_edspxx_2027").createCL("o_ltts_kdpb_edspxx_2027", {ShardingType: "hash", ShardingKey: {"eduspbho":1,"farendma":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ltts_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_ltts").getCL("o_ltts_kdpb_edspxx").attachCL("bdp_ltts_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027",  {LowBound: {denjriqi: "20260101"}, UpBound: {denjriqi: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ltts_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 362) {
println("[ID: 362]")
try{
   try{ db.createCS("bdp_o_ltts_kdpb_edspxx_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_o_ltts_kdpb_edspxx_2027").createCL("o_ltts_kdpb_edspxx_2027", {ShardingType: "hash", ShardingKey: {"eduspbho":1,"farendma":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("o_ltts_kdpb_edspxx").attachCL("bdp_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027",  {LowBound: {denjriqi: "20260101"}, UpBound: {denjriqi: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_o_ltts_kdpb_edspxx_2027.o_ltts_kdpb_edspxx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 363) {
println("[ID: 363]")
try{
   try{ db.createCS("bdp_f_sdb_apms_cust_repay_query_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_apms_cust_repay_query_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_apms_cust_repay_query_2026").createCL("f_sdb_apms_cust_repay_query_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"cert_no":1,"cust_no":1,"prod_code":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_apms_cust_repay_query_2026.f_sdb_apms_cust_repay_query_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_apms_cust_repay_query").attachCL("bdp_f_sdb_apms_cust_repay_query_2026.f_sdb_apms_cust_repay_query_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_apms_cust_repay_query_2026.f_sdb_apms_cust_repay_query_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 364) {
println("[ID: 364]")
try{
   try{ db.createCS("bdp_ltts_o_ltts_kdpl_edtzmx_2027", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ltts_o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_ltts_o_ltts_kdpl_edtzmx_2027").createCL("o_ltts_kdpl_edtzmx_2027", {ShardingType: "hash", ShardingKey: {"jioylius":1,"zhanghao":1,"farendma":1,"edutzlex":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ltts_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
   try{ db.getCS("bdp_ltts").getCL("o_ltts_kdpl_edtzmx").attachCL("bdp_ltts_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ltts_o_ltts_kdpl_edtzmx_2027.o_ltts_kdpl_edtzmx_2027, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 365) {
println("[ID: 365]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_repay_plan_info_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_repay_plan_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_repay_plan_info_2026").createCL("f_sdb_cfas_repay_plan_info_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"currcnt":1,"rependdate":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_repay_plan_info_2026.f_sdb_cfas_repay_plan_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_repay_plan_info").attachCL("bdp_f_sdb_cfas_repay_plan_info_2026.f_sdb_cfas_repay_plan_info_2026",  {LowBound: {data_dt: "20260101"}, UpBound: {data_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_repay_plan_info_2026.f_sdb_cfas_repay_plan_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 366) {
println("[ID: 366]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_prov_repay_info_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_prov_repay_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_prov_repay_info_2026").createCL("f_sdb_cfas_prov_repay_info_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"term":1,"trace_no":1,"paytype":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_prov_repay_info_2026.f_sdb_cfas_prov_repay_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_prov_repay_info").attachCL("bdp_f_sdb_cfas_prov_repay_info_2026.f_sdb_cfas_prov_repay_info_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_prov_repay_info_2026.f_sdb_cfas_prov_repay_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 367) {
println("[ID: 367]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026").createCL("f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_g_at_indi_cust_prft_dt_agg").attachCL("bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 368) {
println("[ID: 368]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_mima_stat_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_mima_stat_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_mima_stat_2026").createCL("f_sdb_ltts_mima_stat_2026", {ShardingType: "hash", ShardingKey: {"jiaoyils":1,"kehuzhao":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_mima_stat_2026.f_sdb_ltts_mima_stat_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_mima_stat").attachCL("bdp_f_sdb_ltts_mima_stat_2026.f_sdb_ltts_mima_stat_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_mima_stat_2026.f_sdb_ltts_mima_stat_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 369) {
println("[ID: 369]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026").createCL("f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_g_at_indi_cust_prft_mn_agg").attachCL("bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026",  {LowBound: {prft_mn: "202601"}, UpBound: {prft_mn: "202701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026.f_sdb_eqz_g_at_indi_cust_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 370) {
println("[ID: 370]")
try{
   try{ db.createCS("bdp_ylk_o_ylk_yqtx_sms_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ylk_o_ylk_yqtx_sms_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk_o_ylk_yqtx_sms_2026").createCL("o_ylk_yqtx_sms_2026", {ShardingType: "hash", ShardingKey: {"mo_phone":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ylk_o_ylk_yqtx_sms_2026.o_ylk_yqtx_sms_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ylk").getCL("o_ylk_yqtx_sms").attachCL("bdp_ylk_o_ylk_yqtx_sms_2026.o_ylk_yqtx_sms_2026",  {LowBound: {message_time: "20260101000000"}, UpBound: {message_time: "20270101000000"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ylk_o_ylk_yqtx_sms_2026.o_ylk_yqtx_sms_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 371) {
println("[ID: 371]")
try{
   try{ db.createCS("bdp_f_sdb_nupp_payment_busi_de_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_nupp_payment_busi_de_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_nupp_payment_busi_de_2026").createCL("f_sdb_nupp_payment_busi_de_2026", {ShardingType: "hash", ShardingKey: {"busi_reference":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_nupp_payment_busi_de_2026.f_sdb_nupp_payment_busi_de_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_nupp_payment_busi_de").attachCL("bdp_f_sdb_nupp_payment_busi_de_2026.f_sdb_nupp_payment_busi_de_2026",  {LowBound: {tran_date: "20260101"}, UpBound: {tran_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_nupp_payment_busi_de_2026.f_sdb_nupp_payment_busi_de_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 372) {
println("[ID: 372]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_jyhz_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_jyhz_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_jyhz_202601").createCL("f_sdb_eqz_jyhz_202601", {ShardingType: "hash", ShardingKey: {"smrycd":1,"acctno":1,"amntcd":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_jyhz_202601.f_sdb_eqz_jyhz_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_jyhz").attachCL("bdp_f_sdb_eqz_jyhz_202601.f_sdb_eqz_jyhz_202601",  {LowBound: {datamon: "20260101"}, UpBound: {datamon: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_jyhz_202601.f_sdb_eqz_jyhz_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 373) {
println("[ID: 373]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_jyhz_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_jyhz_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_jyhz_202604").createCL("f_sdb_eqz_jyhz_202604", {ShardingType: "hash", ShardingKey: {"smrycd":1,"acctno":1,"amntcd":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_jyhz_202604.f_sdb_eqz_jyhz_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_jyhz").attachCL("bdp_f_sdb_eqz_jyhz_202604.f_sdb_eqz_jyhz_202604",  {LowBound: {datamon: "20260401"}, UpBound: {datamon: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_jyhz_202604.f_sdb_eqz_jyhz_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 374) {
println("[ID: 374]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_jyhz_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_jyhz_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_jyhz_202607").createCL("f_sdb_eqz_jyhz_202607", {ShardingType: "hash", ShardingKey: {"smrycd":1,"acctno":1,"amntcd":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_jyhz_202607.f_sdb_eqz_jyhz_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_jyhz").attachCL("bdp_f_sdb_eqz_jyhz_202607.f_sdb_eqz_jyhz_202607",  {LowBound: {datamon: "20260701"}, UpBound: {datamon: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_jyhz_202607.f_sdb_eqz_jyhz_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 375) {
println("[ID: 375]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_jyhz_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_jyhz_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_jyhz_202610").createCL("f_sdb_eqz_jyhz_202610", {ShardingType: "hash", ShardingKey: {"smrycd":1,"acctno":1,"amntcd":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_jyhz_202610.f_sdb_eqz_jyhz_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_jyhz").attachCL("bdp_f_sdb_eqz_jyhz_202610.f_sdb_eqz_jyhz_202610",  {LowBound: {datamon: "20261001"}, UpBound: {datamon: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_jyhz_202610.f_sdb_eqz_jyhz_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 376) {
println("[ID: 376]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026",  {LowBound: {summary_date: "20260101"}, UpBound: {summary_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 377) {
println("[ID: 377]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 378) {
println("[ID: 378]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026",  {LowBound: {summary_date: "20260101"}, UpBound: {summary_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_stru_dep_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 379) {
println("[ID: 379]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 380) {
println("[ID: 380]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026",  {LowBound: {summary_date: "20260101"}, UpBound: {summary_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_trust_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 381) {
println("[ID: 381]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026",  {LowBound: {summary_date: "20260101"}, UpBound: {summary_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 382) {
println("[ID: 382]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026").createCL("f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"is_assets":1,"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_a_i_pbank_fund_prft_dt_agg").attachCL("bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 383) {
println("[ID: 383]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026").createCL("f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"is_assets":1,"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_a_i_pbank_fund_prft_mn_agg").attachCL("bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026",  {LowBound: {prft_mn: "202601"}, UpBound: {prft_mn: "202701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 384) {
println("[ID: 384]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026", {ShardingType: "hash", ShardingKey: {"is_assets":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026",  {LowBound: {prft_mn: "202601"}, UpBound: {prft_mn: "202701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_mn_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 385) {
println("[ID: 385]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_ha_fund_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 386) {
println("[ID: 386]")
try{
   try{ db.createCS("bdp_f_sdb_ccbs_ismp_image_log_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ccbs_ismp_image_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ccbs_ismp_image_log_2026").createCL("f_sdb_ccbs_ismp_image_log_2026", {ShardingType: "hash", ShardingKey: {"batch_id":1,"file_name":1,"row_num":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ccbs_ismp_image_log_2026.f_sdb_ccbs_ismp_image_log_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ccbs_ismp_image_log").attachCL("bdp_f_sdb_ccbs_ismp_image_log_2026.f_sdb_ccbs_ismp_image_log_2026",  {LowBound: {call_dt: "20260101"}, UpBound: {call_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ccbs_ismp_image_log_2026.f_sdb_ccbs_ismp_image_log_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 387) {
println("[ID: 387]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"prod_no":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fin_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 388) {
println("[ID: 388]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026").createCL("f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026", {ShardingType: "hash", ShardingKey: {"is_assets":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg").attachCL("bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026",  {LowBound: {prft_dt: "20260101"}, UpBound: {prft_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026.f_sdb_eqz_cust_a_i_pbank_fund_prft_dt_agg_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 389) {
println("[ID: 389]")
try{
   try{ db.createCS("bdp_f_sdb_icop_tranlog_info_202601", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_tranlog_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_tranlog_info_202601").createCL("f_sdb_icop_tranlog_info_202601", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_tranlog_info_202601.f_sdb_icop_tranlog_info_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tranlog_info").attachCL("bdp_f_sdb_icop_tranlog_info_202601.f_sdb_icop_tranlog_info_202601",  {LowBound: {createtime: "2026-01-01"}, UpBound: {createtime: "2026-04-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_tranlog_info_202601.f_sdb_icop_tranlog_info_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 390) {
println("[ID: 390]")
try{
   try{ db.createCS("bdp_f_sdb_icop_tranlog_info_202604", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_tranlog_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_tranlog_info_202604").createCL("f_sdb_icop_tranlog_info_202604", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_tranlog_info_202604.f_sdb_icop_tranlog_info_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tranlog_info").attachCL("bdp_f_sdb_icop_tranlog_info_202604.f_sdb_icop_tranlog_info_202604",  {LowBound: {createtime: "2026-04-01"}, UpBound: {createtime: "2026-07-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_tranlog_info_202604.f_sdb_icop_tranlog_info_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 391) {
println("[ID: 391]")
try{
   try{ db.createCS("bdp_f_sdb_icop_tranlog_info_202607", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_tranlog_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_tranlog_info_202607").createCL("f_sdb_icop_tranlog_info_202607", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_tranlog_info_202607.f_sdb_icop_tranlog_info_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tranlog_info").attachCL("bdp_f_sdb_icop_tranlog_info_202607.f_sdb_icop_tranlog_info_202607",  {LowBound: {createtime: "2026-07-01"}, UpBound: {createtime: "2026-10-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_tranlog_info_202607.f_sdb_icop_tranlog_info_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 392) {
println("[ID: 392]")
try{
   try{ db.createCS("bdp_f_sdb_icop_tranlog_info_202610", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_tranlog_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_tranlog_info_202610").createCL("f_sdb_icop_tranlog_info_202610", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_tranlog_info_202610.f_sdb_icop_tranlog_info_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_tranlog_info").attachCL("bdp_f_sdb_icop_tranlog_info_202610.f_sdb_icop_tranlog_info_202610",  {LowBound: {createtime: "2026-10-01"}, UpBound: {createtime: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_tranlog_info_202610.f_sdb_icop_tranlog_info_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 393) {
println("[ID: 393]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_repay_record_detail_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_repay_record_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_repay_record_detail_2026").createCL("f_sdb_cfas_repay_record_detail_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_repay_record_detail_2026.f_sdb_cfas_repay_record_detail_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_repay_record_detail").attachCL("bdp_f_sdb_cfas_repay_record_detail_2026.f_sdb_cfas_repay_record_detail_2026",  {LowBound: {txdate: "20260101"}, UpBound: {txdate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_repay_record_detail_2026.f_sdb_cfas_repay_record_detail_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 394) {
println("[ID: 394]")
try{
   try{ db.createCS("bdp_f_sdb_uaps_corp_indi_profit_bal_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_uaps_corp_indi_profit_bal_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_uaps_corp_indi_profit_bal_2026").createCL("f_sdb_uaps_corp_indi_profit_bal_2026", {ShardingType: "hash", ShardingKey: {"mercht_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_uaps_corp_indi_profit_bal_2026.f_sdb_uaps_corp_indi_profit_bal_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_uaps_corp_indi_profit_bal").attachCL("bdp_f_sdb_uaps_corp_indi_profit_bal_2026.f_sdb_uaps_corp_indi_profit_bal_2026",  {LowBound: {load_year: "2026"}, UpBound: {load_year: "2027"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_uaps_corp_indi_profit_bal_2026.f_sdb_uaps_corp_indi_profit_bal_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 395) {
println("[ID: 395]")
try{
   try{ db.createCS("bdp_f_sdb_ltts_kdpl_zhbdmx_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ltts_kdpl_zhbdmx_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ltts_kdpl_zhbdmx_2026").createCL("f_sdb_ltts_kdpl_zhbdmx_2026", {ShardingType: "hash", ShardingKey: {"guiylius":1,"zhanghao":1,"farendma":1,"ilzhkhzh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ltts_kdpl_zhbdmx_2026.f_sdb_ltts_kdpl_zhbdmx_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ltts_kdpl_zhbdmx").attachCL("bdp_f_sdb_ltts_kdpl_zhbdmx_2026.f_sdb_ltts_kdpl_zhbdmx_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ltts_kdpl_zhbdmx_2026.f_sdb_ltts_kdpl_zhbdmx_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 396) {
println("[ID: 396]")
try{
   try{ db.createCS("bdp_f_sdb_o_ltts_kfab_zngzcp_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_o_ltts_kfab_zngzcp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_o_ltts_kfab_zngzcp_2026").createCL("f_sdb_o_ltts_kfab_zngzcp_2026", {ShardingType: "hash", ShardingKey: {"guiylius":1,"farendma":1,"cpzunexh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_o_ltts_kfab_zngzcp_2026.f_sdb_o_ltts_kfab_zngzcp_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_o_ltts_kfab_zngzcp").attachCL("bdp_f_sdb_o_ltts_kfab_zngzcp_2026.f_sdb_o_ltts_kfab_zngzcp_2026",  {LowBound: {jiaoyirq: "20260101"}, UpBound: {jiaoyirq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_o_ltts_kfab_zngzcp_2026.f_sdb_o_ltts_kfab_zngzcp_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 397) {
println("[ID: 397]")
try{
   try{ db.createCS("bdp_f_sdb_csm_crd_amort_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_csm_crd_amort_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_csm_crd_amort_2026").createCL("f_sdb_csm_crd_amort_2026", {ShardingType: "hash", ShardingKey: {"vouch_num":1,"amort_pay_seq_num":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_csm_crd_amort_2026.f_sdb_csm_crd_amort_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_csm_crd_amort").attachCL("bdp_f_sdb_csm_crd_amort_2026.f_sdb_csm_crd_amort_2026",  {LowBound: {crtd_dt: "20260101"}, UpBound: {crtd_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_csm_crd_amort_2026.f_sdb_csm_crd_amort_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 398) {
println("[ID: 398]")
try{
   try{ db.createCS("bdp_f_sdb_csm_crd_letter_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_csm_crd_letter_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_csm_crd_letter_2026").createCL("f_sdb_csm_crd_letter_2026", {ShardingType: "hash", ShardingKey: {"tran_flow_no":1,"evt_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_csm_crd_letter_2026.f_sdb_csm_crd_letter_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_csm_crd_letter").attachCL("bdp_f_sdb_csm_crd_letter_2026.f_sdb_csm_crd_letter_2026",  {LowBound: {submit_date: "20260101"}, UpBound: {submit_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_csm_crd_letter_2026.f_sdb_csm_crd_letter_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 399) {
println("[ID: 399]")
try{
   try{ db.createCS("bdp_f_sdb_nupp_payment_busi_cyq_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_nupp_payment_busi_cyq_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_nupp_payment_busi_cyq_2026").createCL("f_sdb_nupp_payment_busi_cyq_2026", {ShardingType: "hash", ShardingKey: {"busi_reference":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_nupp_payment_busi_cyq_2026.f_sdb_nupp_payment_busi_cyq_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_nupp_payment_busi_cyq").attachCL("bdp_f_sdb_nupp_payment_busi_cyq_2026.f_sdb_nupp_payment_busi_cyq_2026",  {LowBound: {busi_back_time: "2026-01-01"}, UpBound: {busi_back_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_nupp_payment_busi_cyq_2026.f_sdb_nupp_payment_busi_cyq_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 400) {
println("[ID: 400]")
try{
   try{ db.createCS("bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026").createCL("f_sdb_sotp_digital_confirmation_cash_concentration_2026", {ShardingType: "hash", ShardingKey: {"custno":1,"provideaccount":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026.f_sdb_sotp_digital_confirmation_cash_concentration_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_sotp_digital_confirmation_cash_concentration").attachCL("bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026.f_sdb_sotp_digital_confirmation_cash_concentration_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_sotp_digital_confirmation_cash_concentration_2026.f_sdb_sotp_digital_confirmation_cash_concentration_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 401) {
println("[ID: 401]")
try{
   try{ db.createCS("bdp_f_sdb_icop_bplat_pldfquotacheck_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_icop_bplat_pldfquotacheck_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_icop_bplat_pldfquotacheck_2026").createCL("f_sdb_icop_bplat_pldfquotacheck_2026", {ShardingType: "hash", ShardingKey: {"data_id":1,"checkno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_icop_bplat_pldfquotacheck_2026.f_sdb_icop_bplat_pldfquotacheck_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_icop_bplat_pldfquotacheck_20250730bak").attachCL("bdp_f_sdb_icop_bplat_pldfquotacheck_2026.f_sdb_icop_bplat_pldfquotacheck_2026",  {LowBound: {modifydate: "20260101"}, UpBound: {modifydate: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_icop_bplat_pldfquotacheck_2026.f_sdb_icop_bplat_pldfquotacheck_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 402) {
println("[ID: 402]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202601", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202601").createCL("f_sdb_ussp_hdhz_mx_202601", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202601.f_sdb_ussp_hdhz_mx_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202601.f_sdb_ussp_hdhz_mx_202601",  {LowBound: {jyrq: "20260101"}, UpBound: {jyrq: "20260201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202601.f_sdb_ussp_hdhz_mx_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 403) {
println("[ID: 403]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202602", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202602, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202602").createCL("f_sdb_ussp_hdhz_mx_202602", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202602.f_sdb_ussp_hdhz_mx_202602, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202602.f_sdb_ussp_hdhz_mx_202602",  {LowBound: {jyrq: "20260201"}, UpBound: {jyrq: "20260301"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202602.f_sdb_ussp_hdhz_mx_202602, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 404) {
println("[ID: 404]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202603", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202603, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202603").createCL("f_sdb_ussp_hdhz_mx_202603", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202603.f_sdb_ussp_hdhz_mx_202603, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202603.f_sdb_ussp_hdhz_mx_202603",  {LowBound: {jyrq: "20260301"}, UpBound: {jyrq: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202603.f_sdb_ussp_hdhz_mx_202603, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 405) {
println("[ID: 405]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202604", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202604").createCL("f_sdb_ussp_hdhz_mx_202604", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202604.f_sdb_ussp_hdhz_mx_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202604.f_sdb_ussp_hdhz_mx_202604",  {LowBound: {jyrq: "20260401"}, UpBound: {jyrq: "20260501"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202604.f_sdb_ussp_hdhz_mx_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 406) {
println("[ID: 406]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202605", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202605, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202605").createCL("f_sdb_ussp_hdhz_mx_202605", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202605.f_sdb_ussp_hdhz_mx_202605, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202605.f_sdb_ussp_hdhz_mx_202605",  {LowBound: {jyrq: "20260501"}, UpBound: {jyrq: "20260601"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202605.f_sdb_ussp_hdhz_mx_202605, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 407) {
println("[ID: 407]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202606", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202606, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202606").createCL("f_sdb_ussp_hdhz_mx_202606", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202606.f_sdb_ussp_hdhz_mx_202606, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202606.f_sdb_ussp_hdhz_mx_202606",  {LowBound: {jyrq: "20260601"}, UpBound: {jyrq: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202606.f_sdb_ussp_hdhz_mx_202606, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 408) {
println("[ID: 408]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202607", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202607").createCL("f_sdb_ussp_hdhz_mx_202607", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202607.f_sdb_ussp_hdhz_mx_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202607.f_sdb_ussp_hdhz_mx_202607",  {LowBound: {jyrq: "20260701"}, UpBound: {jyrq: "20260801"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202607.f_sdb_ussp_hdhz_mx_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 409) {
println("[ID: 409]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202608", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202608, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202608").createCL("f_sdb_ussp_hdhz_mx_202608", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202608.f_sdb_ussp_hdhz_mx_202608, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202608.f_sdb_ussp_hdhz_mx_202608",  {LowBound: {jyrq: "20260801"}, UpBound: {jyrq: "20260901"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202608.f_sdb_ussp_hdhz_mx_202608, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 410) {
println("[ID: 410]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202609", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202609, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202609").createCL("f_sdb_ussp_hdhz_mx_202609", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202609.f_sdb_ussp_hdhz_mx_202609, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202609.f_sdb_ussp_hdhz_mx_202609",  {LowBound: {jyrq: "20260901"}, UpBound: {jyrq: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202609.f_sdb_ussp_hdhz_mx_202609, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 411) {
println("[ID: 411]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202610", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202610").createCL("f_sdb_ussp_hdhz_mx_202610", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202610.f_sdb_ussp_hdhz_mx_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202610.f_sdb_ussp_hdhz_mx_202610",  {LowBound: {jyrq: "20261001"}, UpBound: {jyrq: "20261101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202610.f_sdb_ussp_hdhz_mx_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 412) {
println("[ID: 412]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202611", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202611, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202611").createCL("f_sdb_ussp_hdhz_mx_202611", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202611.f_sdb_ussp_hdhz_mx_202611, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202611.f_sdb_ussp_hdhz_mx_202611",  {LowBound: {jyrq: "20261101"}, UpBound: {jyrq: "20261201"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202611.f_sdb_ussp_hdhz_mx_202611, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 413) {
println("[ID: 413]")
try{
   try{ db.createCS("bdp_f_sdb_ussp_hdhz_mx_202612", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ussp_hdhz_mx_202612, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ussp_hdhz_mx_202612").createCL("f_sdb_ussp_hdhz_mx_202612", {ShardingType: "hash", ShardingKey: {"lsh":1,"acctno":1,"res1":1,"res3":1,"res2":1,"hdlx":1,"zh":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ussp_hdhz_mx_202612.f_sdb_ussp_hdhz_mx_202612, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ussp_hdhz_mx").attachCL("bdp_f_sdb_ussp_hdhz_mx_202612.f_sdb_ussp_hdhz_mx_202612",  {LowBound: {jyrq: "20261201"}, UpBound: {jyrq: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ussp_hdhz_mx_202612.f_sdb_ussp_hdhz_mx_202612, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 414) {
println("[ID: 414]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026").createCL("f_sdb_cfas_ln_drawback_reg_sum_01_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"trace_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026.f_sdb_cfas_ln_drawback_reg_sum_01_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_drawback_reg_sum_01").attachCL("bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026.f_sdb_cfas_ln_drawback_reg_sum_01_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_ln_drawback_reg_sum_01_2026.f_sdb_cfas_ln_drawback_reg_sum_01_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 415) {
println("[ID: 415]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026").createCL("f_sdb_cfas_ln_drawback_reg_sum_02_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"trace_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026.f_sdb_cfas_ln_drawback_reg_sum_02_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_drawback_reg_sum_02").attachCL("bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026.f_sdb_cfas_ln_drawback_reg_sum_02_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_ln_drawback_reg_sum_02_2026.f_sdb_cfas_ln_drawback_reg_sum_02_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 416) {
println("[ID: 416]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026").createCL("f_sdb_cfas_ln_drawback_reg_sum_03_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"trace_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026.f_sdb_cfas_ln_drawback_reg_sum_03_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_drawback_reg_sum_03").attachCL("bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026.f_sdb_cfas_ln_drawback_reg_sum_03_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_ln_drawback_reg_sum_03_2026.f_sdb_cfas_ln_drawback_reg_sum_03_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 417) {
println("[ID: 417]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026").createCL("f_sdb_cfas_ln_drawback_reg_sum_04_2026", {ShardingType: "hash", ShardingKey: {"vchno":1,"trace_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026.f_sdb_cfas_ln_drawback_reg_sum_04_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_ln_drawback_reg_sum_04").attachCL("bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026.f_sdb_cfas_ln_drawback_reg_sum_04_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_ln_drawback_reg_sum_04_2026.f_sdb_cfas_ln_drawback_reg_sum_04_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 418) {
println("[ID: 418]")
try{
   try{ db.createCS("bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026", {Domain: "bdp_ds01_domain_2023"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026").createCL("f_sdb_sotp_digital_confirmation_bank_loan_2026", {ShardingType: "hash", ShardingKey: {"row_key":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026.f_sdb_sotp_digital_confirmation_bank_loan_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_sotp_digital_confirmation_bank_loan").attachCL("bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026.f_sdb_sotp_digital_confirmation_bank_loan_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_sotp_digital_confirmation_bank_loan_2026.f_sdb_sotp_digital_confirmation_bank_loan_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 419) {
println("[ID: 419]")
try{
   try{ db.createCS("bdp_f_sdb_wmps_referral_per_data_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wmps_referral_per_data_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wmps_referral_per_data_2026").createCL("f_sdb_wmps_referral_per_data_2026", {ShardingType: "hash", ShardingKey: {"hr_ss_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wmps_referral_per_data_2026.f_sdb_wmps_referral_per_data_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wmps_referral_per_data").attachCL("bdp_f_sdb_wmps_referral_per_data_2026.f_sdb_wmps_referral_per_data_2026",  {LowBound: {data_date: "20260101"}, UpBound: {data_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wmps_referral_per_data_2026.f_sdb_wmps_referral_per_data_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 420) {
println("[ID: 420]")
try{
   try{ db.createCS("bdp_f_sdb_nupp_payment_busi_flow_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_nupp_payment_busi_flow_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_nupp_payment_busi_flow_2026").createCL("f_sdb_nupp_payment_busi_flow_2026", {ShardingType: "hash", ShardingKey: {"busi_reference":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_nupp_payment_busi_flow_2026.f_sdb_nupp_payment_busi_flow_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_nupp_payment_busi_flow").attachCL("bdp_f_sdb_nupp_payment_busi_flow_2026.f_sdb_nupp_payment_busi_flow_2026",  {LowBound: {tran_date: "20260101"}, UpBound: {tran_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_nupp_payment_busi_flow_2026.f_sdb_nupp_payment_busi_flow_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 421) {
println("[ID: 421]")
try{
   try{ db.createCS("bdp_ussp_o_uaps_t_order_new_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_ussp_o_uaps_t_order_new_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp_o_uaps_t_order_new_2026").createCL("o_uaps_t_order_new_2026", {ShardingType: "hash", ShardingKey: {"order_no":1,"mcht_no":1,"trade_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_ussp_o_uaps_t_order_new_2026.o_uaps_t_order_new_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_ussp").getCL("o_uaps_t_order_new").attachCL("bdp_ussp_o_uaps_t_order_new_2026.o_uaps_t_order_new_2026",  {LowBound: {order_date: "20260101"}, UpBound: {order_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_ussp_o_uaps_t_order_new_2026.o_uaps_t_order_new_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 422) {
println("[ID: 422]")
try{
   try{ db.createCS("bdp_f_sdb_wbmp_jyjg_busi_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wbmp_jyjg_busi_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wbmp_jyjg_busi_2026").createCL("f_sdb_wbmp_jyjg_busi_2026", {ShardingType: "hash", ShardingKey: {"is_work":1,"work_hour":1,"trade_cd":1,"trade_org_id":1,"work_mode":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wbmp_jyjg_busi_2026.f_sdb_wbmp_jyjg_busi_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wbmp_jyjg_busi").attachCL("bdp_f_sdb_wbmp_jyjg_busi_2026.f_sdb_wbmp_jyjg_busi_2026",  {LowBound: {work_month: "20260101"}, UpBound: {work_month: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wbmp_jyjg_busi_2026.f_sdb_wbmp_jyjg_busi_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 423) {
println("[ID: 423]")
try{
   try{ db.createCS("bdp_f_sdb_nupp_payment_busi_xe_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_nupp_payment_busi_xe_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_nupp_payment_busi_xe_2026").createCL("f_sdb_nupp_payment_busi_xe_2026", {ShardingType: "hash", ShardingKey: {"busi_reference":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_nupp_payment_busi_xe_2026.f_sdb_nupp_payment_busi_xe_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_nupp_payment_busi_xe").attachCL("bdp_f_sdb_nupp_payment_busi_xe_2026.f_sdb_nupp_payment_busi_xe_2026",  {LowBound: {tran_date: "20260101"}, UpBound: {tran_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_nupp_payment_busi_xe_2026.f_sdb_nupp_payment_busi_xe_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 424) {
println("[ID: 424]")
try{
   try{ db.createCS("bdp_f_sdb_socs_call_analysis_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_socs_call_analysis_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_socs_call_analysis_2026").createCL("f_sdb_socs_call_analysis_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_socs_call_analysis_2026.f_sdb_socs_call_analysis_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_socs_call_analysis").attachCL("bdp_f_sdb_socs_call_analysis_2026.f_sdb_socs_call_analysis_2026",  {LowBound: {import_time: "2026-01-01"}, UpBound: {import_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_socs_call_analysis_2026.f_sdb_socs_call_analysis_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 425) {
println("[ID: 425]")
try{
   try{ db.createCS("bdp_f_sdb_cfas_repay_record_sum_traceno_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cfas_repay_record_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cfas_repay_record_sum_traceno_2026").createCL("f_sdb_cfas_repay_record_sum_traceno_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cfas_repay_record_sum_traceno_2026.f_sdb_cfas_repay_record_sum_traceno_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cfas_repay_record_sum_traceno").attachCL("bdp_f_sdb_cfas_repay_record_sum_traceno_2026.f_sdb_cfas_repay_record_sum_traceno_2026",  {LowBound: {tx_date: "20260101"}, UpBound: {tx_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cfas_repay_record_sum_traceno_2026.f_sdb_cfas_repay_record_sum_traceno_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 426) {
println("[ID: 426]")
try{
   try{ db.createCS("bdp_f_sdb_eqz_repay_trans_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_eqz_repay_trans_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_eqz_repay_trans_2026").createCL("f_sdb_eqz_repay_trans_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_eqz_repay_trans_2026.f_sdb_eqz_repay_trans_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_eqz_repay_trans").attachCL("bdp_f_sdb_eqz_repay_trans_2026.f_sdb_eqz_repay_trans_2026",  {LowBound: {repay_dt: "2026-01-01"}, UpBound: {repay_dt: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_eqz_repay_trans_2026.f_sdb_eqz_repay_trans_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 427) {
println("[ID: 427]")
try{
   try{ db.createCS("bdp_f_sdb_obnk_acct_dtl_info_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_obnk_acct_dtl_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_obnk_acct_dtl_info_2026").createCL("f_sdb_obnk_acct_dtl_info_2026", {ShardingType: "hash", ShardingKey: {"biz_class":1,"cust_acct_id":1,"tran_dtl_num":1,"minor_acct_id":1,"tran_seq_num":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_obnk_acct_dtl_info_2026.f_sdb_obnk_acct_dtl_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_obnk_acct_dtl_info").attachCL("bdp_f_sdb_obnk_acct_dtl_info_2026.f_sdb_obnk_acct_dtl_info_2026",  {LowBound: {tran_dt: "20260101"}, UpBound: {tran_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_obnk_acct_dtl_info_2026.f_sdb_obnk_acct_dtl_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 428) {
println("[ID: 428]")
try{
   try{ db.createCS("bdp_f_sdb_wbmp_trade_serialnum_202601", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wbmp_trade_serialnum_202601, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wbmp_trade_serialnum_202601").createCL("f_sdb_wbmp_trade_serialnum_202601", {ShardingType: "hash", ShardingKey: {"trade_tsn":1,"trade_time":1,"deviceid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wbmp_trade_serialnum_202601.f_sdb_wbmp_trade_serialnum_202601, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wbmp_trade_serialnum").attachCL("bdp_f_sdb_wbmp_trade_serialnum_202601.f_sdb_wbmp_trade_serialnum_202601",  {LowBound: {trade_date: "20260101"}, UpBound: {trade_date: "20260401"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wbmp_trade_serialnum_202601.f_sdb_wbmp_trade_serialnum_202601, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 429) {
println("[ID: 429]")
try{
   try{ db.createCS("bdp_f_sdb_wbmp_trade_serialnum_202604", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wbmp_trade_serialnum_202604, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wbmp_trade_serialnum_202604").createCL("f_sdb_wbmp_trade_serialnum_202604", {ShardingType: "hash", ShardingKey: {"trade_tsn":1,"trade_time":1,"deviceid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wbmp_trade_serialnum_202604.f_sdb_wbmp_trade_serialnum_202604, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wbmp_trade_serialnum").attachCL("bdp_f_sdb_wbmp_trade_serialnum_202604.f_sdb_wbmp_trade_serialnum_202604",  {LowBound: {trade_date: "20260401"}, UpBound: {trade_date: "20260701"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wbmp_trade_serialnum_202604.f_sdb_wbmp_trade_serialnum_202604, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 430) {
println("[ID: 430]")
try{
   try{ db.createCS("bdp_f_sdb_wbmp_trade_serialnum_202607", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wbmp_trade_serialnum_202607, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wbmp_trade_serialnum_202607").createCL("f_sdb_wbmp_trade_serialnum_202607", {ShardingType: "hash", ShardingKey: {"trade_tsn":1,"trade_time":1,"deviceid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wbmp_trade_serialnum_202607.f_sdb_wbmp_trade_serialnum_202607, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wbmp_trade_serialnum").attachCL("bdp_f_sdb_wbmp_trade_serialnum_202607.f_sdb_wbmp_trade_serialnum_202607",  {LowBound: {trade_date: "20260701"}, UpBound: {trade_date: "20261001"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wbmp_trade_serialnum_202607.f_sdb_wbmp_trade_serialnum_202607, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 431) {
println("[ID: 431]")
try{
   try{ db.createCS("bdp_f_sdb_wbmp_trade_serialnum_202610", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_wbmp_trade_serialnum_202610, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_wbmp_trade_serialnum_202610").createCL("f_sdb_wbmp_trade_serialnum_202610", {ShardingType: "hash", ShardingKey: {"trade_tsn":1,"trade_time":1,"deviceid":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_wbmp_trade_serialnum_202610.f_sdb_wbmp_trade_serialnum_202610, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_wbmp_trade_serialnum").attachCL("bdp_f_sdb_wbmp_trade_serialnum_202610.f_sdb_wbmp_trade_serialnum_202610",  {LowBound: {trade_date: "20261001"}, UpBound: {trade_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_wbmp_trade_serialnum_202610.f_sdb_wbmp_trade_serialnum_202610, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 432) {
println("[ID: 432]")
try{
   try{ db.createCS("bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026").createCL("f_sdb_ccbs_cbcs_detection_acct_info_history_2026", {ShardingType: "hash", ShardingKey: {"serial_num":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026.f_sdb_ccbs_cbcs_detection_acct_info_history_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ccbs_cbcs_detection_acct_info_history").attachCL("bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026.f_sdb_ccbs_cbcs_detection_acct_info_history_2026",  {LowBound: {serial_date: "20260101"}, UpBound: {serial_date: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ccbs_cbcs_detection_acct_info_history_2026.f_sdb_ccbs_cbcs_detection_acct_info_history_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 433) {
println("[ID: 433]")
try{
   try{ db.createCS("bdp_f_sdb_pfb_acct_info_modify_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_pfb_acct_info_modify_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_pfb_acct_info_modify_2026").createCL("f_sdb_pfb_acct_info_modify_2026", {ShardingType: "hash", ShardingKey: {"acctno":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_pfb_acct_info_modify_2026.f_sdb_pfb_acct_info_modify_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_pfb_acct_info").attachCL("bdp_f_sdb_pfb_acct_info_modify_2026.f_sdb_pfb_acct_info_modify_2026",  {LowBound: {opendt: "20260101"}, UpBound: {opendt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_pfb_acct_info_modify_2026.f_sdb_pfb_acct_info_modify_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 434) {
println("[ID: 434]")
try{
   try{ db.createCS("bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026").createCL("f_sdb_cebs_cpct_ci_asset_dtl_2026", {ShardingType: "hash", ShardingKey: {"date_type":1,"cust_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026.f_sdb_cebs_cpct_ci_asset_dtl_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_cebs_cpct_ci_asset_dtl").attachCL("bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026.f_sdb_cebs_cpct_ci_asset_dtl_2026",  {LowBound: {data_dt: "20260101"}, UpBound: {data_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_cebs_cpct_ci_asset_dtl_2026.f_sdb_cebs_cpct_ci_asset_dtl_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 435) {
println("[ID: 435]")
try{
   try{ db.createCS("bdp_f_sdb_ucmp_corp_rela_basic_info_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_ucmp_corp_rela_basic_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_ucmp_corp_rela_basic_info_2026").createCL("f_sdb_ucmp_corp_rela_basic_info_2026", {ShardingType: "hash", ShardingKey: {"contr_dtl_id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_ucmp_corp_rela_basic_info_2026.f_sdb_ucmp_corp_rela_basic_info_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_ucmp_corp_rela_basic_info").attachCL("bdp_f_sdb_ucmp_corp_rela_basic_info_2026.f_sdb_ucmp_corp_rela_basic_info_2026",  {LowBound: {load_dt: "20260101"}, UpBound: {load_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_ucmp_corp_rela_basic_info_2026.f_sdb_ucmp_corp_rela_basic_info_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 436) {
println("[ID: 436]")
try{
   try{ db.createCS("bdp_p_sdb_icms_ln_repay_tran_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_p_sdb_icms_ln_repay_tran_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_p_sdb_icms_ln_repay_tran_2026").createCL("p_sdb_icms_ln_repay_tran_2026", {ShardingType: "hash", ShardingKey: {"serial_no":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_p_sdb_icms_ln_repay_tran_2026.p_sdb_icms_ln_repay_tran_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("p_sdb_icms_ln_repay_tran").attachCL("bdp_p_sdb_icms_ln_repay_tran_2026.p_sdb_icms_ln_repay_tran_2026",  {LowBound: {repay_dt: "20260101"}, UpBound: {repay_dt: "20270101"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_p_sdb_icms_ln_repay_tran_2026.p_sdb_icms_ln_repay_tran_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
// -------------------------------------------------------------
if (beginID <= 437) {
println("[ID: 437]")
try{
   try{ db.createCS("bdp_f_sdb_socs_sms_report_query_2026", {Domain: "domain_mid_2024"}) } catch(e) { println("[ERROR] Failed to createCS bdp_f_sdb_socs_sms_report_query_2026, error: " + e); throw e; };
   try{ db.getCS("bdp_f_sdb_socs_sms_report_query_2026").createCL("f_sdb_socs_sms_report_query_2026", {ShardingType: "hash", ShardingKey: {"id":1}, ReplSize: 2, AutoSplit: true, Compressed: true}) } catch(e) { println("[ERROR] Failed to createCL bdp_f_sdb_socs_sms_report_query_2026.f_sdb_socs_sms_report_query_2026, error: " + e); throw e; };
   try{ db.getCS("bdp").getCL("f_sdb_socs_sms_report_query").attachCL("bdp_f_sdb_socs_sms_report_query_2026.f_sdb_socs_sms_report_query_2026",  {LowBound: {create_time: "2026-01-01"}, UpBound: {create_time: "2027-01-01"}}) } catch(e) { println("[ERROR] Failed to attachCL bdp_f_sdb_socs_sms_report_query_2026.f_sdb_socs_sms_report_query_2026, error: " + e); throw e; };
} catch(e) { throw e; }
}
