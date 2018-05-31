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

ActiveRecord::Schema.define(version: 20171105005208) do

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
    t.string  "first_name", limit: 255
    t.string  "last_name",  limit: 255
    t.string  "email",      limit: 255
    t.string  "major",      limit: 255
    t.text    "commitment"
    t.text    "why_join"
    t.text    "goal"
    t.boolean "newsletter"
  end

  create_table "events", force: :cascade do |t|
    t.string   "name",          null: false
    t.string   "description"
    t.string   "facebook_link"
    t.binary   "banner"
    t.string   "filename"
    t.string   "mime_type"
    t.datetime "event_date"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["name"], name: "index_events_on_name", using: :btree
  end

  create_table "exam_archives", force: :cascade do |t|
    t.string   "course_name",       limit: 255
    t.integer  "exam_year"
    t.string   "season",            limit: 255
    t.string   "exam_file_name",    limit: 255
    t.string   "exam_content_type", limit: 255
    t.integer  "exam_file_size"
    t.datetime "exam_updated_at"
  end

  create_table "jobs", force: :cascade do |t|
    t.string   "position"
    t.string   "company"
    t.string   "location"
    t.string   "description"
    t.string   "contact"
    t.string   "url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "job_type"
  end

  create_table "redirect_counts", force: :cascade do |t|
    t.string   "name",       limit: 30
    t.integer  "count",                 default: 0
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",                             null: false
    t.datetime "updated_at",                             null: false
    t.string   "email",                  default: "",    null: false
    t.string   "encrypted_password",     default: "",    null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,     null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.boolean  "admin",                  default: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
