# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160318013727) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "applications", force: :cascade do |t|
    t.string   "firstName"
    t.string   "lastName"
    t.string   "faculty"
    t.string   "programOfStudy"
    t.string   "email"
    t.text     "commitments"
    t.string   "linkedInUrl"
    t.string   "githubUrl"
    t.text     "whyGoodCandidate"
    t.string   "resumeUrl"
    t.text     "additionalInfo"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "club_members", force: :cascade do |t|
    t.string  "first_name"
    t.string  "last_name"
    t.string  "email"
    t.string  "major"
    t.text    "commitment"
    t.text    "why_join"
    t.text    "goal"
    t.boolean "newsletter"
  end

  create_table "exam_archives", force: :cascade do |t|
    t.string  "course_name"
    t.integer "exam_year"
    t.string  "season"
  end

  create_table "redirect_counts", force: :cascade do |t|
    t.string   "name",       limit: 30
    t.integer  "count",                 default: 0
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
