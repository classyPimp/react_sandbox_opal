module Components
  module Blogs
    class UserIndex < RW 

      expose

      include Plugins::Paginatable

      def get_initial_state
        {
          blogs: ModelCollection.new,
          pagination_per_page: 25
        }
      end

      def component_did_mount
        x = Hash.new(props.location.query.to_n)
        unless x.empty?
          make_query(x)
        else
          query = {}
          query[:page] = 1
          query[:per_page] = state.pagination_per_page
          make_query(query)
        end
      end

      def component_will_receive_props(next_props)
        n_q = Hash.new(Native(next_props).location.query.to_n)
        c_q = Hash.new(props.location.query.to_n)  
        if n_q != c_q
          make_query(n_q)
        end      
      end

      def make_query(_extra_params)
        #_extra_params[:per_page] = _extra_params[:per_page] || props.location.query.per_page || 1
        Blog.index({component: self, extra_params: _extra_params}).then do |blogs|
          extract_pagination(blogs)
          set_state blogs: blogs, pagination_per_page: _extra_params[:per_page]
        end
      end

      def render
        t(:div,{className: 'blog_index container'},
          spinner,
          t(:div, {className: 'search_bar'},
            t(:input, {ref: "search"}),
            t(:button, {onClick: ->{search}}, "search!")
          ),
          *splat_each(state.blogs) do |blog|
            t(:div, {key: "#{blog}", className: 'box'},
              t(:p, {}, "title: #{blog.title}"),
              t(:p, {}, "author: #{blog.user.profile.name}"), 
              t(:div, {dangerouslySetInnerHTML: {__html: blog.body}.to_n}),
              link_to("show this blog", "/blogs/show/#{blog.slug}")
            )
          end,
          will_paginate,
          t(:br, {})
        )
      end

      def pagination_switch_page(_page, per_page)
        # Blog.index({extra_params: {page: _page, per_page: per_page}}.merge(@namespace)).then do |blogs|
        #   Components::App::Router.history.replaceState(nil, props.location.pathname, {page: _page, per_page: per_page})
        #   extract_pagination(blogs)
        #   set_state blogs: blogs
        # end
      end

      def search
        to_search = self.ref("search").value.strip
        pathname = props.location.pathname
        query = Hash.new(props.location.query.to_n)
        query[:search_query] = to_search
        query[:page] = 1
        query[:per_page] = state.pagination_per_page
        props.history.pushState(nil, pathname, query)
      end

      def per_page_select(value) #from Plugins::Paginatable
        c_q = Hash.new(props.location.query.to_n)
        c_q[:per_page] = value
        c_q[:page] = 1
        props.history.pushState(nil, props.location.pathname, c_q)
      end

      #*//////////////********** AS_BLOGGER
      # def component_will_unmount
      #   Components::App::Main.instance.props.history.replaceState(nil, Components::App::Main.instance.props.location.pathname, {})
      # end

      

      #*************************** END AS BLOGGER

    end
  end
end