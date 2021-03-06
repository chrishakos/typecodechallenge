class Article < ActiveRecord::Base
  validates :title, :slug, presence: true
  validates :slug, uniqueness: true

  # override to_param under the hood to set url param to custom slug
  def to_param
    self.slug
  end

  # class method to verify frontend generated slug
  def self.verify_slug(slug)
    if !is_valid?(slug)
      while !is_valid?(slug)
        slug = append_to_slug(slug)
      end
    end
    return slug
  end

  # checks if article exists by searching for given slug (from frontend)
  def self.is_valid?(slug)
    if Article.exists?(slug: slug)
      return false
    else
      return true
    end
  end

  # appends five random characters to slug to avoid DB collisions
  def self.append_to_slug(slug)
    random_string = ('a'..'z').to_a.shuffle[0,5].join
    return slug + "-" + random_string
  end
end
