namespace('Notification')

class Notification.Display
  @generateLogo: (config) ->
    "<i class=\"fa fa-bell #{config.class}\" data-id=\"#{config.dataId}\"></i>"
